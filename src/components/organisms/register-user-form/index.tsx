'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/molecules/input';
import Button from '@/components/molecules/button'; 
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './styles.module.scss';
import { UserRegisterType } from '@/types/user';
import { registerUserFormValidator } from '@/types/validators/user-form';
import { postRegisterUser } from '@/services/user.service';
import { useRouter } from 'next/navigation';


export default function RegisterUserForm() {
  const { handleSubmit, register, formState: { errors } } = useForm<UserRegisterType>({
    resolver: zodResolver(registerUserFormValidator),
  });

  const router = useRouter()


  const onSubmit = (data: UserRegisterType) => {
    console.log('Dados do Formulário:', data);
    postRegisterUser(data).then(() => {
      router.push('/')
    })
  };

  return (
    <div className={styles["form-container"]}>
      <section className={styles.title}>Cadastro de Usuario</section>
      <form onSubmit={handleSubmit(onSubmit)}>

        <h3>Dados de Login</h3>

        <section className={styles["container-section"]}>
          <Input {...register('email')} label="Email" destructive={!!errors?.email?.message} hintText={errors?.email?.message} />
          <Input {...register('password')} label="Senha" type="password" destructive={!!errors?.password?.message} hintText={errors?.password?.message} />
          <Input {...register('confirmPassword')} label="Confirme a Senha" type="password" destructive={!!errors?.confirmPassword?.message} hintText={errors?.confirmPassword?.message} />
        </section>
        
        <h3>Dados de Pessoais</h3>
        <section className={styles["container-section"]}>
          <Input {...register('fullName')} label="Nome Completo" destructive={!!errors?.fullName?.message} hintText={errors?.fullName?.message} />
          <Input {...register('birthDate')} label="Data de Nascimento" type="date" destructive={!!errors?.birthDate?.message} hintText={errors?.birthDate?.message} />
          <Input {...register('personalDocument')} label="CPF" destructive={!!errors?.personalDocument?.message} hintText={errors?.personalDocument?.message} />
        </section>

        <div className={styles["form-actions"]}>
          <Button hierarchy="secondary-gray" onClick={() => router.push('/')}>Voltar</Button>
          <Button type="submit">Cadastrar</Button>
        </div>
        </form>
    </div>
  );
}
