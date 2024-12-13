import { EventDto } from '@/types';
import requestAdapter, { ApiResponse } from './request-adapter';

export async function createEvent(data: EventDto) {
    try {
        const response = await requestAdapter.post('/api/v1/events', data);
        console.log(response.data);
    } catch (error) {
        throw new Error(`Erro ao criar evento: ${error}`)

    }
}

export async function fetchAllEvents():Promise<ApiResponse<EventDto[]>> {
    try {
        const reponse = await requestAdapter.get<EventDto[]>('/api/v1/events');
        return reponse
    } catch (error) {
        throw new Error(`Erro ao buscar eventos: ${error}`)
    }
}

export async function findOneEvent(eventId:string){
    try {
        const reponse = await requestAdapter.get<EventDto>(`/api/v1/events/${eventId}`);
        return reponse
    } catch (error) {
        throw new Error(`Erro ao buscar eventos: ${error}`)
    }
}
