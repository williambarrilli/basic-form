export interface EventResponse {
    limit: number; 
    skip: number; 
    filter: Record<string, unknown>; 
    data: EventDto[]; 
    total: number;
  }
  
  export interface EventDto {
    id?: string;
    eventName: string; 
    eventDate: string; 
    estimatedParticipants: number;
    averageFee: string; 
    company: string; 
    responsible: string; 
    email: string; 
    phone: string; 
    description?: string
    bannerUrl?:string
    dateSubscribedStart: string; 
    dateSubscribedEnd: string; 
  }
  