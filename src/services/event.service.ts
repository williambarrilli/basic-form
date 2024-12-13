import { EventDto } from '@/types';
import requestAdapter from './request-adapter';
import { ApiResponse } from '@/types/request-adapter';

export async function createEvent(data: EventDto) {
    try {
         await requestAdapter.post('/api/v1/events', data);
    } catch (error) {
        throw new Error(`Erro ao criar evento: ${error}`)

    }
}

export async function fetchAllEvents():Promise<EventDto[]> {
    try {
        const reponse = await requestAdapter.get<ApiResponse<EventDto[]>>('/api/v1/events');
        return reponse.data
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
