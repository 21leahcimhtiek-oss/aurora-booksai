import { OpenAI } from 'openai'
import { NextRequest, NextResponse } from 'next/server'

const PLACEHOLDER_PATTERN = /REPLACE_WITH|\.\.\./

function isConfigured(value: string | undefined): value is string {
  return Boolean(value && !PLACEHOLDER_PATTERN.test(value))
}

function getNoKeyReply(message: string): string {
  const normalized = message.toLowerCase()
  const starter = [
    'Share a recent book you liked and why.',
    'Tell me the reading goal (learning, fiction, career, or book club).',
    'List any preferred genres, tone, or difficulty.'
  ]

  if (normalized.includes('recommend')) {
    return `No-key mode is active, so Aurora is running without external AI calls. To get useful book recommendations now, send:\n- your goal\n- books you already enjoyed\n- genre preferences\n\nStarter prompts:\n${starter.map((item) => `• ${item}`).join('\n')}`
  }

  return `No-key mode is active, so Aurora is running privacy-first defaults without external AI calls. You can continue with structured guidance now, or add OPENAI_API_KEY later for full AI responses.`
}

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  if (!message) return NextResponse.json({ error: 'Message required' }, { status: 400 })

  const apiKey = process.env.OPENAI_API_KEY
  if (!isConfigured(apiKey)) {
    return NextResponse.json({ reply: getNoKeyReply(message) })
  }

  const openai = new OpenAI({ apiKey })
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are Aurora Rayes Books Agent, an Aurora Rayes ecosystem assistant. AI book recommendations and reading assistant. Be helpful, concise, and actionable.' },
      { role: 'user', content: message },
    ],
    max_tokens: 1024,
  })

  return NextResponse.json({ reply: completion.choices[0].message.content })
}
