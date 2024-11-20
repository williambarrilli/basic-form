'use client';

import { forwardRef } from 'react'

import objStr from 'obj-str'

import type { ButtonProps } from './types'

import styles from './styles.module.scss'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      buttonBorderRadius = 'sm',
      destructive = false,
      disabled = false,
      hierarchy = 'primary',
      size = 'sm',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={`${objStr({
          [styles['button']]: true,
          [styles[`button--radius-${buttonBorderRadius}`]]: true,
          [styles['button--destructive']]: destructive,
          [styles[`button--${hierarchy}`]]: true,
          [styles[`button--${size}`]]: true,
        })} ${rest.className}`}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
