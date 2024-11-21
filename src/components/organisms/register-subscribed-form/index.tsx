'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/molecules/input'; // Ajuste o caminho conforme necessário
import Button from '@/components/molecules/button'; // Ajuste o caminho conforme necessário
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './styles.module.scss'; // Ajuste o caminho conforme necessário
import { subscribedRegisterFormValidator } from '@/types/validators/subscribed-form-register';
import { RegisterSubscribedFormType } from '@/types/subscribed-form-register';


export default function RegisterSubscribedForm() {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<RegisterSubscribedFormType>({
    resolver: zodResolver(subscribedRegisterFormValidator),
  });

  const onSubmit = (data: RegisterSubscribedFormType) => {
    console.log('Dados do Formulário:', data);
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className={styles["form-container"]}>
      <section className={styles.title}>Cadastro de Usuario</section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className={styles["container-section"]}>
          <Input {...register('fullName')} label="Nome Completo" destructive={!!errors?.fullName?.message} hintText={errors?.fullName?.message} />
          <Input {...register('badgeName')} label="Nome no Crachá" destructive={!!errors?.badgeName?.message} hintText={errors?.badgeName?.message} />
          <Input {...register('password')} label="Senha" type="password" destructive={!!errors?.password?.message} hintText={errors?.password?.message} />
          <Input {...register('confirmPassword')} label="Confirma Senha" type="password" destructive={!!errors?.confirmPassword?.message} hintText={errors?.confirmPassword?.message} />
          </section>

            <h3>Dados pessoais</h3>
          <section className={styles["container-section"]}>
            <Input {...register('cpf')} label="CPF" destructive={!!errors?.cpf?.message} hintText={errors?.cpf?.message}/>
            <Input {...register('birthDate')} label="Data de Nascimento" type="date" destructive={!!errors?.birthDate?.message} hintText={errors?.birthDate?.message} />
          </section>

            <h3>Endereço</h3>
          <section className={styles["container-section"]}>
            <Input {...register('cep')} label="CEP" destructive={!!errors?.cep?.message} hintText={errors?.cep?.message} />
            <Input {...register('address')} label="Endereço" destructive={!!errors?.address?.message} hintText={errors?.address?.message} />
            <Input {...register('number')} label="Número" destructive={!!errors?.number?.message} hintText={errors?.number?.message} />
            <Input {...register('neighborhood')} label="Bairro" destructive={!!errors?.neighborhood?.message} hintText={errors?.neighborhood?.message} />
            <Input {...register('city')} label="Cidade" destructive={!!errors?.city?.message} hintText={errors?.city?.message} />
            <Input {...register('state')} label="Estado" destructive={!!errors?.state?.message} hintText={errors?.state?.message} />
          </section>

            <h3>Contato</h3>
          <section className={styles["container-section"]}>
            <Input {...register('email')} label="E-Mail" type="email" destructive={!!errors?.email?.message} hintText={errors?.email?.message} />
            <Input {...register('phone')} label="Fone" type="tel" destructive={!!errors?.phone?.message} hintText={errors?.phone?.message} />
            <Input {...register('mobile')} label="Celular" type="tel" destructive={!!errors?.mobile?.message} hintText={errors?.mobile?.message} />
          </section>

        <div className={styles["form-actions"]}>
          <Button hierarchy="secondary-gray" onClick={() => reset()}>Limpar Campos</Button>
          <Button type="submit">Registrar</Button>
        </div>
      </form>
    </div>
  );
}
