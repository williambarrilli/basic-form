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
console.log(errors)
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
          <Input {...register('organizer')} label="Entidade Realizadora"destructive={!!errors?.organizer?.message} hintText={errors?.organizer?.message}/>
          <Input {...register('budgetResponsible')} label="Responsável pelo Orçamento"destructive={!!errors?.budgetResponsible?.message} hintText={errors?.budgetResponsible?.message}/>
          <Input {...register('contactEmail')} label="E-mail de Contato" type='email'destructive={!!errors?.contactEmail?.message} hintText={errors?.contactEmail?.message}/>
          <Input {...register('contactPhone')} label="Telefone de Contato" destructive={!!errors?.contactPhone?.message} hintText={errors?.contactPhone?.message}/>
          </section>
        <div className={styles["form-actions"]}>
        <Button  hierarchy='secondary-gray' onClick={()=>reset()}>Limpar Campos</Button>
          <Button  type="submit" >Registrar</Button>
        </div>
      </form>
    </div>
  );
};

