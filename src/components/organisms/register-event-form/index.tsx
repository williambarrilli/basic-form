'use client'
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './styles.module.scss'
import { formRegisterValidator } from '@/types/validators/event-form-register';
import { RegisterEventFormType } from '@/types/event-form-register';
import { Input } from '@/components/molecules/input';

export default function RegisterEventForm() {

  const methods = useForm<RegisterEventFormType>({
    resolver: zodResolver(formRegisterValidator), // Utilizando o zod para validação
  });

  const onSubmit = (data: RegisterEventFormType) => {
    console.log('Dados do Formulário:', data);
    alert('Formulário enviado com sucesso!');
  };

  return (
    <FormProvider {...methods}>

    <div className={styles["form-container"]}>
      <section className={styles.title}>Registro de evento Interno</section>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Input name="eventName" label="Nome do Evento" required />
        <Input name="eventDate" label="Data" type="date" required />
        <Input name="estimatedParticipants" label="Inscrições Estimadas" type="number" required min={1} />
        <Input name="averageFee" label="Valor Médio da Inscrição" type="number" min={0} />
        <Input name="organizer" label="Entidade Realizadora" required />
        <Input name="budgetResponsible" label="Responsável pelo Orçamento" required />
        <Input name="contactEmail" label="E-mail de Contato" type="email" required />
        <Input name="contactPhone" label="Telefone de Contato" required minLength={10} />


        <div className={styles["form-actions"]}>
          <button type="submit" className={styles["btn-register"]}>Registrar</button>
        </div>
      </form>
    </div>
    </FormProvider>
  );
};

