'use client'
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './styles.module.scss'
import { formRegisterValidator } from '@/types/validators/event-form-register';
import { RegisterEventFormType } from '@/types/event-form-register';
import { Input } from '@/components/molecules/input';
import { useForm } from 'react-hook-form';
import Button from '@/components/molecules/button';

export default function RegisterEventForm() {

  const {handleSubmit,register, formState: {errors},reset} = useForm<RegisterEventFormType>({
    resolver: zodResolver(formRegisterValidator),
  });

  const onSubmit = (data: RegisterEventFormType) => {
    console.log('Dados do Formulário:', data);
    alert('Formulário enviado com sucesso!');
  };

  return (

    <div className={styles["form-container"]}>
      <section className={styles.title}>Registro de evento Interno</section>
      <form onSubmit={handleSubmit(onSubmit)} >
        <section className={styles["container-inputs"]}>
          <Input {...register('eventName')} label="Nome do Evento" destructive={!!errors?.eventName?.message} hintText={errors?.eventName?.message}/>
          <Input {...register('eventDate')}label="Data do evento" type='date' destructive={!!errors?.eventDate?.message} hintText={errors?.eventDate?.message}/>
          <Input {...register('dateSubscribedStart')} label="Data inicio das inscrições" type='date' destructive={!!errors?.dateSubscribedStart?.message} hintText={errors?.dateSubscribedStart?.message}/>
          <Input {...register('dateSubscribedEnd')} label="Data fim das inscrições"  type='date' destructive={!!errors?.dateSubscribedEnd?.message} hintText={errors?.dateSubscribedEnd?.message}/>
          <Input {...register('estimatedParticipants')} label="Inscrições Estimadas" destructive={!!errors?.estimatedParticipants?.message} hintText={errors?.estimatedParticipants?.message}/>
          <Input {...register('averageFee')} label="Valor Médio da Inscrição" mask='currency'destructive={!!errors?.averageFee?.message} hintText={errors?.averageFee?.message}/>
          <Input {...register('company')} label="Entidade Realizadora"destructive={!!errors?.company?.message} hintText={errors?.company?.message}/>
          <Input {...register('responsible')} label="Responsável pelo Orçamento"destructive={!!errors?.responsible?.message} hintText={errors?.responsible?.message}/>
          <Input {...register('email')} label="E-mail de Contato" type='email'destructive={!!errors?.email?.message} hintText={errors?.email?.message}/>
          <Input {...register('phone')} label="Telefone de Contato" destructive={!!errors?.phone?.message} hintText={errors?.phone?.message}/>
          </section>
        <div className={styles["form-actions"]}>
        <Button  hierarchy='secondary-gray' onClick={()=>reset()}>Limpar Campos</Button>
          <Button  type="submit" >Registrar</Button>
        </div>
      </form>
    </div>
  );
};

