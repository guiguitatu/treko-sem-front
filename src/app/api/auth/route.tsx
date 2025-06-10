import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()
  const token = jwt.sign({ username }, "TREKOOOO", {
    expiresIn: '6h',
  })

  const res = NextResponse.json({ ok: true })
  res.cookies.set({
    name: 'token',
    value: token,
    httpOnly: true,
    secure: true,
    maxAge: 3600,
    path: '/',
  })
  return res
}