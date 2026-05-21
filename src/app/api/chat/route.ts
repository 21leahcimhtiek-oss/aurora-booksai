import { OpenAI } from 'openai'
import { NextRequest, NextResponse } from 'next/server'

const PLACEHOLDER_PATTERN = /REPLACE_WITH|\.\.\./

function isConfigured(value: string | undefined): value is string {
  return Boolean(value && !PLACEHOLDER_PATTERN.test(value))
}

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  if (!message) return NextResponse.json({ error: 'Message required' }, { status: 400 })

  const apiKey = process.env.OPENAI_API_KEY
  if (!isConfigured(apiKey)) {
    return NextResponse.json(
      { reply: 'Aurora Rayes Books Agent needs OPENAI_API_KEY configured before AI responses are enabled.' },
      { status: 503 }
    )
  }

  const openai = new OpenAI({ apiKey })
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are Aurora Rayes Books Agent, an Aurora Rayes ecosystem assistant. AI book recommendations and reading assistant. Be helpful, concise, and actionable.' },
      { role: 'user', content: message },
    ],
    max_tokens: 1024,
  })

  return NextResponse.json({ reply: completion.choices[0].message.content })
}
