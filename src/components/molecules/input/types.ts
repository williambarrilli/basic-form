import { ReactNode } from "react"

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
    destructive?: boolean
    hintText?: string
    icon?: {
        leading?: React.ReactNode
        trailing?: React.ReactNode
    }
    disabled?: boolean
    tooltip?: ReactNode
    mask?: 'text' | 'currency' | 'percentage' | 'cpf'
    required?: boolean
    label?: string
}
