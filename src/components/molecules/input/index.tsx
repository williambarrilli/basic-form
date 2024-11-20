import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import styles from './styles.module.scss'

interface InputProps {
  name: string; // Nome do campo no formulário
  label: string; // Rótulo a ser exibido acima do input
  type?: string; // Tipo do input (ex: text, number, email)
  placeholder?: string; // Placeholder do input
  required?: boolean; // Define se o campo é obrigatório
  minLength?: number; // Comprimento mínimo (usado com inputs de texto)
  maxLength?: number; // Comprimento máximo (usado com inputs de texto)
  min?: number; // Valor mínimo (usado com inputs numéricos)
  max?: number; // Valor máximo (usado com inputs numéricos)
}

export function Input({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  minLength,
  maxLength,
  min,
  max,
}: InputProps) {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div className={styles["input-container"]}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? 'Este campo é obrigatório' : false,
          minLength: minLength ? { value: minLength, message: `Mínimo de ${minLength} caracteres` } : undefined,
          maxLength: maxLength ? { value: maxLength, message: `Máximo de ${maxLength} caracteres` } : undefined,
          min: min !== undefined ? { value: min, message: `Valor mínimo é ${min}` } : undefined,
          max: max !== undefined ? { value: max, message: `Valor máximo é ${max}` } : undefined,
        }}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            className={styles[errors[name] ? 'error' : '']}
          />
        )}
      />
      {errors[name] && (
        <span className={styles["error-message"]}>
          {(errors[name]?.message as string) || 'Erro inválido'}
        </span>
      )}
    </div>
  );
}
