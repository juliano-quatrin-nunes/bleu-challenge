import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  primary?: boolean
}

const Button = (props: ButtonProps) => {
  const { primary, children, className, ...rest } = props

  return (
    <button {...rest} className={`${styles.button} ${primary && styles.primary} ${className}`}>
      {children}
    </button>
  )
}

export default Button
