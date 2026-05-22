import { OpenAI } from 'openai'
import { NextRequest, NextResponse } from 'next/server'

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return null
  }

  return new OpenAI({ apiKey })
}

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  if (!message) return NextResponse.json({ error: 'Message required' }, { status: 400 })
  const openai = getOpenAIClient()
  if (!openai) return NextResponse.json({ error: 'OPENAI_API_KEY is not configured' }, { status: 503 })
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are ReadAI, an AI assistant. AI book recommendations and reading assistant. Be helpful, concise, and actionable.' },
      { role: 'user', content: message },
    ],
    max_tokens: 1024,
  })
  return NextResponse.json({ reply: completion.choices[0].message.content })
}
