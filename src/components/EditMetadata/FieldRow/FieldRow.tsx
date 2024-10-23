import TextField from '@/components/TextField/TextField'
import { Field, FieldProps } from 'formik'
import Image from 'next/image'
import styles from './FieldRow.module.css'

interface FieldRowProps {
  index: number
  handleRemove: (index: number) => void
}

const FieldRow = ({ index, handleRemove }: FieldRowProps) => {
  const handleOnRemove = () => {
    handleRemove(index)
  }

  return (
    <div className={styles.metadataFieldRow}>
      <Field name={`metadata.${index}.name`}>
        {({ field }: FieldProps<string>) => <TextField label="Name" {...field} />}
      </Field>
      <Field name={`metadata.${index}.value`}>
        {({ field }: FieldProps<string>) => <TextField label="Value" {...field} />}
      </Field>
      <Image
        src="/Images/trash.png"
        width={24}
        height={24}
        alt="delete"
        onClick={handleOnRemove}
        className={styles.trash}
      />
    </div>
  )
}
export default FieldRow
