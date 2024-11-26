export type UserRegisterType = {
    email: string;
    password: string;
    confirmPassword: string
    fullName: string
    birthDate: string
    personalDocument: string
}

export type UserLoginType = {
    email: string;
    password: string;
}
