'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/molecules/input'; // Ajuste o caminho conforme necessário
import Button from '@/components/molecules/button'; // Ajuste o caminho conforme necessário
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './styles.module.scss'; // Ajuste o caminho conforme necessário
import { UserRegisterType } from '@/types/user';
import { registerUserFormValidator } from '@/types/validators/user-form';
import { postRegisterUser } from '@/services/user.service';


export default function RegisterUserForm() {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<UserRegisterType>({
    resolver: zodResolver(registerUserFormValidator),
  });

  const onSubmit = (data: UserRegisterType) => {
    console.log('Dados do Formulário:', data);
    postRegisterUser(data)
    alert('Formulário enviado com sucesso!');
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
          <Input {...register('documentCPF')} label="CPF" destructive={!!errors?.documentCPF?.message} hintText={errors?.documentCPF?.message} />
        </section>

        <div className={styles["form-actions"]}>
          <Button hierarchy="secondary-gray" onClick={() => reset()}>Limpar Campos</Button>
          <Button type="submit">Cadastrar</Button>
        </div>
        </form>
    </div>
  );
}
