import { UserLoginType, UserRegisterType } from '@/types/user';
import requestAdapter from './request-adapter';
import Cookies from 'js-cookie';

export async function postRegisterUser(data: UserRegisterType) {
    // data.birthDate = '2002/05/20'
    try {
        await requestAdapter.post('/api/v1/register', data);

    } catch (error) {
        console.error('Erro ao criar Usuario:', error);
        throw new Error('Erro ao criar Usuario:')
    }
}

export async function postLoginUser(data: UserLoginType) {
    const body = {
        "email": data.email,
        "password": data.password,
    }
    try {
        const response = await requestAdapter.post('/api/v1/login', body);
        if (response) {
            console.log('passo')
            Cookies.set('JWT_TOKEN', response.token as unknown as string, { expires: 1, secure: true, path: '/' });
        }
    } catch (error) {
        console.error('Erro ao realizar Login', error);
        throw new Error('Erro ao realizar Login')

    }
}
