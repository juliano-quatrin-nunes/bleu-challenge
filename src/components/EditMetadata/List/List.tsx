import { FormValues, Metadata } from "@/utils/utils";
import { FieldArray, useFormikContext } from "formik";
import MetadataFieldRow from "../FieldRow/FieldRow";
import styles from "./List.module.css";

const List = () => {
  const { values } = useFormikContext<FormValues>();

  return (
    <FieldArray
      name="metadata"
      render={({ remove }) => (
        <div className={styles.metadataList}>
          {values.metadata.map((_: Metadata, index: number) => (
            <MetadataFieldRow index={index} handleRemove={remove} key={index} />
          ))}
        </div>
      )}
    />
  );
};

export default List;
