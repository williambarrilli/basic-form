'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/molecules/input'; // Ajuste o caminho conforme necessário
import Button from '@/components/molecules/button'; // Ajuste o caminho conforme necessário
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './styles.module.scss'; // Ajuste o caminho conforme necessário
import { UserLoginType } from '@/types/user';
import { LoginUserFormValidator } from '@/types/validators/user-form';
import { postLoginUser } from '@/services/user.service';


export default function LoginForm() {
  const { handleSubmit, register, formState: { errors } } = useForm<UserLoginType>({
    resolver: zodResolver(LoginUserFormValidator),
  });

  const onSubmit = (data: UserLoginType) => {
    postLoginUser(data)
  };

  return (
    <div className={styles["form-container"]}>
      <section className={styles.title}>Cadastro de Usuario</section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <section className={styles["container-section"]}>
          <Input {...register('email')} label="Email" destructive={!!errors?.email?.message} hintText={errors?.email?.message} />
          <Input {...register('password')} label="Senha" type="password" destructive={!!errors?.password?.message} hintText={errors?.password?.message} />
          </section>
        <div className={styles["form-actions"]}>
          <Button type="submit">Entrar</Button>
        </div>
      </form>
    </div>
  );
}
