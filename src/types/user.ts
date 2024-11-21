export type UserRegisterType = {
    email: string;
    password: string;
    confirmPassword: string
    fullName: string
    birthDate: string
    documentCPF: string
}

export type UserLoginType = {
    email: string;
    password: string;
}
