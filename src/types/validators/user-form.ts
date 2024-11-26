import { z } from "zod";

export const registerUserFormValidator = z.object({
    fullName: z.string().min(1, 'Nome completo é obrigatório'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
    confirmPassword: z.string().min(6, 'Confirmação de senha deve ter pelo menos 6 caracteres'),
    personalDocument: z.string().min(11, 'CPF é obrigatório').regex(/^\d{11}$/, 'CPF deve ter 11 dígitos'),
    birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
    email: z.string().email('E-mail inválido'),
}).refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas não conferem',
});

export const LoginUserFormValidator = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
})
