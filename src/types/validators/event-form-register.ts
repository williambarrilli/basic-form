import { z } from "zod";

export const formRegisterValidator = z.object({
    eventName: z.string().min(1, 'O nome do evento é obrigatório'),
    description: z.string().optional(),
    bannerUrl: z.string().optional(),
    averageFee: z.string().optional(),
    eventDate: z.string({ message: 'A data é obrigatória' }),
    estimatedParticipants: z.string().min(1, 'Deve ser pelo menos 1 inscrição'),
    dateSubscribedStart: z.string({ message: 'A data é obrigatória' }),
    dateSubscribedEnd: z.string({ message: 'A data é obrigatória' }),
    company: z.string().min(1, 'A entidade realizadora é obrigatória'),
    responsible: z.string().min(1, 'O responsável pelo orçamento é obrigatório'),
    email: z.string().email('Insira um e-mail válido'),
    phone: z.string().min(10, 'O telefone deve ter pelo menos 10 dígitos').regex(/^\d+$/, 'O telefone deve conter apenas números'),
});
