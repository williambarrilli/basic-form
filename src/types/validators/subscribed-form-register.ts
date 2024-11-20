import { z } from "zod";

export const subscribedRegisterFormValidator = z.object({
    fullName: z.string().min(1, 'Nome completo é obrigatório'),
    badgeName: z.string().min(1, 'Nome no crachá é obrigatório'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
    confirmPassword: z.string().min(6, 'Confirmação de senha deve ter pelo menos 6 caracteres'),
    cpf: z.string().min(11, 'CPF é obrigatório').regex(/^\d{11}$/, 'CPF deve ter 11 dígitos'),
    birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
    cep: z.string().min(8, 'CEP é obrigatório').regex(/^\d{8}$/, 'CEP deve ter 8 dígitos'),
    address: z.string().min(1, 'Endereço é obrigatório'),
    number: z.string().min(1, 'Número é obrigatório'),
    neighborhood: z.string().min(1, 'Bairro é obrigatório'),
    city: z.string().min(1, 'Cidade é obrigatória'),
    state: z.string().min(1, 'Estado é obrigatório'),
    email: z.string().email('E-mail inválido'),
    phone: z.string().min(10, 'Telefone inválido').regex(/^\d{10,11}$/, 'Telefone deve ter 10 ou 11 dígitos'),
    mobile: z.string().min(10, 'Celular inválido').regex(/^\d{10,11}$/, 'Celular deve ter 10 ou 11 dígitos'),
});
