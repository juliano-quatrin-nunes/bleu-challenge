import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from './TextField.module.css'

interface FieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
}

const TextField = (props: FieldProps) => {
  const { label, className, ...rest } = props

  return (
    <div className={styles.verticalFlow}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={`${styles.inputField} ${className}`} {...rest}></input>
    </div>
  )
}

export default TextField
