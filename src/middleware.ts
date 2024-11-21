import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken'; // Instale com `npm install jsonwebtoken @types/jsonwebtoken`

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value; // Obtém o token do cookie

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        const secretKey = process.env.JWT_SECRET as string; // Certifique-se de configurar essa variável de ambiente
        jwt.verify(token, secretKey); // Verifica se o token é válido
    } catch (error) {
        console.error(error);
        return NextResponse.redirect(new URL('/login', request.url)); // Redireciona se inválido
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/protected/:path*',

};
