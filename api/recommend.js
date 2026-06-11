export const config = { runtime: 'edge' }

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const body = await req.json()

    const payload = {
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      messages: body.messages,
      tools: [
        {
          type: 'web_search_20250305',
          name: 'web_search'
        }
      ]
    }
    if (body.system) payload.system = body.system

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(payload)
    })

    const data = await res.json()

    // Extraer solo los bloques de texto de la respuesta (ignorar tool_use)
    const texto = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\n')

    return new Response(JSON.stringify({ content: [{ type: 'text', text: texto }] }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
  } catch(e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
  }
}
