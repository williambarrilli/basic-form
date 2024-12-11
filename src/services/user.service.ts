import { UserLoginType, UserRegisterType } from '@/types/user';
import requestAdapter from './request-adapter';
import Cookies from 'js-cookie';

export async function postRegisterUser(data: UserRegisterType) {
    try {
        await requestAdapter.post('/api/v1/register', data);

    } catch (error) {
        throw new Error(`Erro ao criar Usuario: ${error}`)
    }
}

export async function postLoginUser(data: UserLoginType) {
    const body = {
        "email": data.email,
        "password": data.password,
    }
    try {
        const {token} = await requestAdapter.post<{token:string}>('/api/v1/login', body);
        if (token && typeof token === "string") {
            window.localStorage.setItem('JWT_TOKEN',  token);
            Cookies.set('JWT_TOKEN', token as unknown as string, { expires: 1, secure: true, path: '/' });
        }
    } catch (error) {
        throw new Error(`Erro ao realizar Login: ${error}`)
    }
}
