import { z } from "zod";

export const formRegisterValidator = z.object({
    eventName: z.string().min(1, 'O nome do evento é obrigatório'),
    eventDate: z.string().min(1, 'A data é obrigatória'),
    estimatedParticipants: z.string().min(1, 'Deve ser pelo menos 1 inscrição'),
    dateSubscribedStart: z.string().min(1, 'A data é obrigatória'),
    dateSubscribedEnd: z.string().min(1, 'A data é obrigatória'),
    organizer: z.string().min(1, 'A entidade realizadora é obrigatória'),
    budgetResponsible: z.string().min(1, 'O responsável pelo orçamento é obrigatório'),
    contactEmail: z.string().email('Insira um e-mail válido'),
    contactPhone: z.string().min(10, 'O telefone deve ter pelo menos 10 dígitos').regex(/^\d+$/, 'O telefone deve conter apenas números'),
});
