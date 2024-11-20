import requestAdapter from './request-adapter';

export async function postRegisterForm(data: unknown) {
    try {
        const response = await requestAdapter.post('/events', data);
        console.log(response.data); // Dados da resposta
    } catch (error) {
        console.error('Erro ao criar evento:', error);
    }
}
