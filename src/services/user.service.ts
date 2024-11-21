import { UserLoginType, UserRegisterType } from '@/types/user';
import requestAdapter from './request-adapter';

export async function postRegisterUser(data: UserRegisterType) {
    const body = {
        "userName": data.fullName,
        "email": data.email,
        "password": data.password,
        "repeatPassword": data.confirmPassword,
    }
    try {
        const response = await requestAdapter.post('/api/v1/register', body);
        console.log(response.data); // Dados da resposta
    } catch (error) {
        console.error('Erro ao criar Usuario:', error);
    }
}

export async function postLoginUser(data: UserLoginType) {
    const body = {
        "email": data.email,
        "password": data.password,
    }
    try {
        const { data } = await requestAdapter.post('/api/v1/login', body);
        console.log(data); // Dados da resposta
        if (typeof window !== 'undefined' && data) {
            window.localStorage.setItem('token', JSON.stringify(data))
        }
    } catch (error) {
        console.error('Erro ao criar Usuario:', error);
    }
}
