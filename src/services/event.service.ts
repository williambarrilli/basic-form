import requestAdapter from './request-adapter';

export async function postRegisterForm(data: unknown) {
    try {
        const response = await requestAdapter.post('/api/v1/events', data);
        console.log(response.data);
    } catch (error) {
        throw new Error(`Erro ao criar evento: ${error}`)

    }
}

export async function getFindAllEvents() {
    try {
        const response = await requestAdapter.get('/api/v1/events');
        console.log(response.data);
    } catch (error) {
        throw new Error(`Erro ao buscar eventos: ${error}`)

    }
}
