import { FormValues, Metadata } from '@/utils/utils'
import { FieldArray, useFormikContext } from 'formik'
import MetadataFieldRow from '../FieldRow/FieldRow'
import styles from './List.module.css'
import Button from '@/components/Button/Button'

const List = () => {
  const { values } = useFormikContext<FormValues>()

  return (
    <FieldArray
      name="metadata"
      render={({ remove, push }) => (
        <>
          <div className={styles.metadataList}>
            {values.metadata.map((_: Metadata, index: number) => (
              <MetadataFieldRow index={index} handleRemove={remove} key={index} />
            ))}
          </div>
          <Button onClick={push}>Add new field</Button>
        </>
      )}
    />
  )
}

export default List
