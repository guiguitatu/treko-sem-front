import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl

	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api/auth/login') ||
		//checar caminho pra debugar caso n de certo
		pathname.startsWith('/api/auth/signup') ||
		pathname === '/modules/auth/login' ||
		pathname === '/modules/auth/signup' ||
		pathname === '/' ||
		/\.(.*)$/.test(pathname)
	) {
		return NextResponse.next()
	}

	const token = req.cookies.get('token')?.value
	if (!token) {
		// no token → redirect to login
		const loginUrl = req.nextUrl.clone()
		loginUrl.pathname = '/login'
		return NextResponse.redirect(loginUrl)
	}

	try {
		// verify JWT
		jwt.verify(token, "TREKOOOO")
		return NextResponse.next()
	} catch {
		// invalid/expired token → redirect
		const loginUrl = req.nextUrl.clone()
		loginUrl.pathname = '/login'
		return NextResponse.redirect(loginUrl)
	}
}

export const config = {
	// run on all routes except api/auth/login, static assets, _next, favicon…
	matcher: '/((?!api/auth/login|_next|static|favicon\\.ico).*)',
}