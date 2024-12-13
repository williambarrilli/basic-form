import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('JWT_TOKEN')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        const decoded = jwt.decode(token) as JwtPayload;
        if (decoded?.exp && Date.now() >= decoded.exp * 1000) {

            const response = NextResponse.next();
            response.cookies.set('JWT_TOKEN', '', { expires: new Date(0), path: '/' });
            return NextResponse.redirect(new URL('/login', request.url));
        }

        if (request.nextUrl.pathname === '/login') {
            return NextResponse.redirect(new URL('/protected/home', request.url));
        }
    } catch (error) {
        console.error('Erro ao decodificar o token', error);
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/protected/:path*'],

};
