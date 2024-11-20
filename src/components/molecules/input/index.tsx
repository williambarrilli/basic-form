import { forwardRef } from 'react'

import objStr from 'obj-str'

import styles from './styles.module.scss'

import { NumericFormat } from 'react-number-format'
import { InputProps } from './types'

const formatCPF = (value: string) => {
  return value
    .replace(/\D/g, '') 
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
};

const formatCNPJ = (value: string) => {
  return value
    .replace(/\D/g, '') 
    .replace(/(\d{2})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d{1,2})$/, '$1/$2') 
    .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      destructive = false,
      hintText,
      icon,
      label,
      disabled = false,
      tooltip,
      mask = 'text',
      required = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={styles.container}>
        {!!label && (
          <>
            <label htmlFor={label} className={styles['input-label']}>
              {label} {required && <span className={styles['required-field']}>* </span>} {tooltip}
            </label>
          </>
        )}

        <div
          className={objStr({
            [styles['input-field']]: true,
            [styles['input-field--icon-leading']]: !!icon?.leading,
            [styles['input-field--icon-trailing']]: !!icon?.trailing,
            [styles['input-field--destructive']]: destructive,
            [styles['input-field--disabled']]: disabled,
          })}
        >
          {icon?.leading}

          {mask === 'text' && (
            <input
              id={label ?? ''}
              {...rest}
              ref={ref}
              disabled={disabled}
              className={objStr({
                [styles['input']]: true,
                [styles['input--icon-leading']]: !!icon?.leading,
                [styles['input--icon-trailing']]: !!icon?.trailing,
              })}
            />
          )}
          {mask === 'cpf' && (
            <input
              id={label ?? ''}
              {...rest}
              ref={ref}
              disabled={disabled}
              className={objStr({
                [styles['input']]: true,
                [styles['input--icon-leading']]: !!icon?.leading,
                [styles['input--icon-trailing']]: !!icon?.trailing,
              })}
              value={formatCPF(String(rest.value ?? ''))}
            />
          )}

          {mask === 'percentage' && (
            <NumericFormat
              className={objStr({
                [styles['input']]: true,
                [styles['input--icon-leading']]: !!icon?.leading,
                [styles['input--icon-trailing']]: !!icon?.trailing,
              })}
              id={label ?? ''}
              disabled={disabled}
              decimalScale={2}
              decimalSeparator=","
              suffix={'%'}
              isAllowed={values => {
                const { floatValue } = values
                if (floatValue) {
                  return floatValue <= 100
                }
                return true
              }}
              placeholder={rest.placeholder}
              onChange={rest.onChange}
              value={typeof rest.value === 'string' ? rest.value : ''}
            />
          )}
          {mask === 'currency' && (
            <NumericFormat
              className={objStr({
                [styles['input']]: true,
                [styles['input--icon-leading']]: !!icon?.leading,
                [styles['input--icon-trailing']]: !!icon?.trailing,
              })}
              id={label ?? ''}
              disabled={disabled}
              decimalScale={2}
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix="R$"
              placeholder={rest.placeholder}
              onChange={rest.onChange}
              value={typeof rest.value === 'string' ? rest.value : ''}
            />
          )}
          {icon?.trailing}
        </div>
        {!!hintText && (
          <span
            className={objStr({
              [styles['span--destructive']]: destructive,
              [styles['hint-text']]: !!hintText,
              [styles['hint-text--destructive']]: destructive,
            })}
          >
            {hintText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

