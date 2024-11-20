import { z } from "zod";

export const formRegisterValidator = z.object({
    eventName: z.string().min(1, 'O nome do evento é obrigatório'),
    eventDate: z.string().min(1, 'A data é obrigatória'),
    estimatedParticipants: z.number({ invalid_type_error: 'Inscrições estimadas devem ser um número' }).min(1, 'Deve ser pelo menos 1 inscrição'),
    averageFee: z.number({ invalid_type_error: 'O valor médio deve ser um número' }).min(0, 'O valor médio deve ser maior ou igual a 0'),
    organizer: z.string().min(1, 'A entidade realizadora é obrigatória'),
    budgetResponsible: z.string().min(1, 'O responsável pelo orçamento é obrigatório'),
    contactEmail: z.string().email('Insira um e-mail válido'),
    contactPhone: z.string().min(10, 'O telefone deve ter pelo menos 10 dígitos').regex(/^\d+$/, 'O telefone deve conter apenas números'),
});
