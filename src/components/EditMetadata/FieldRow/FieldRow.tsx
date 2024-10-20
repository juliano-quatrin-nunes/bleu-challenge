import TextField from "@/components/TextField/TextField";
import styles from "./FieldRow.module.css";
import Image from "next/image";
import { Field, FieldProps, useFormikContext } from "formik";

interface FieldRowProps {
  index: number;
  handleRemove: (index: number) => void;
}

const FieldRow = ({ index, handleRemove }: FieldRowProps) => {
  const { errors, values } = useFormikContext();

  const handleOnRemove = () => {
    console.log("tentou remover");
    handleRemove(index);
    console.log(index);
  };

  return (
    <div className={styles.metadataFieldRow}>
      <Field name={`metadata.${index}.name`}>
        {({ field }: FieldProps<string>) => (
          <TextField label="Name" {...field} />
        )}
      </Field>
      <Field name={`metadata.${index}.value`}>
        {({ field }: FieldProps<string>) => (
          <TextField
            label="Value"
            {...field}
            onBlur={() => console.log(field.value)}
          />
        )}
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
  );
};
export default FieldRow;
