import type { APIRoute } from 'astro';

export const prerender = false;

const json = (body: Record<string, unknown>, status: number, headers?: HeadersInit) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...headers },
  });

const text = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

export const POST: APIRoute = async ({ request }) => {
  const baseUrl = import.meta.env.KEEPCONTROL_BASE_URL?.replace(/\/$/, '');
  const apiKey = import.meta.env.KEEPCONTROL_API_KEY;

  if (!baseUrl || !apiKey) {
    console.error('KeepControl environment variables are not configured.');
    return json({ message: 'O formulário está temporariamente indisponível.' }, 503);
  }

  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return json({ message: 'Dados do formulário inválidos.' }, 400);
  }

  const name = text(input.name);
  const email = text(input.email);
  const phone = text(input.phone);
  const address = text(input.address);
  const message = text(input.message);

  if (!name || name.length > 120 || (!email && !phone)) {
    return json({ message: 'Informe seu nome e pelo menos um meio de contato.' }, 400);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ message: 'Informe um e-mail válido.' }, 400);
  }
  if (email.length > 255 || phone.length > 40) {
    return json({ message: 'E-mail ou telefone acima do tamanho permitido.' }, 400);
  }

  if (message.length > 2000) {
    return json({ message: 'A mensagem deve ter no máximo 2.000 caracteres.' }, 400);
  }

  const payload: Record<string, string> = { name };
  if (email) payload.email = email;
  if (phone) payload.phone = phone;
  if (address) payload.address = address;
  if (message) payload.message = message;

  const visitorId = text(input.visitorId);
  const sessionId = text(input.sessionId);
  if (visitorId) payload.visitorId = visitorId;
  if (sessionId) payload.sessionId = sessionId;

  try {
    const upstream = await fetch(`${baseUrl}/api/v1/leads`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey },
      body: JSON.stringify(payload),
    });
    const result = await upstream.json().catch(() => ({}));

    if (upstream.ok) return json(result, 201);

    const status = upstream.status === 429 ? 429 : upstream.status === 400 ? 400 : 502;
    const retryAfter = upstream.headers.get('retry-after');
    const message =
      status === 429
        ? 'Muitas tentativas. Aguarde um pouco e tente novamente.'
        : status === 400
          ? 'Confira os dados informados e tente novamente.'
          : 'Não foi possível enviar agora. Tente novamente em instantes.';

    console.error('KeepControl API error', {
      status: upstream.status,
      errorCode: result?.errorCode,
      correlationId: result?.correlationId,
    });
    return json({ message }, status, retryAfter ? { 'retry-after': retryAfter } : undefined);
  } catch (error) {
    console.error('KeepControl request failed', error);
    return json({ message: 'Não foi possível enviar agora. Tente novamente em instantes.' }, 502);
  }
};
