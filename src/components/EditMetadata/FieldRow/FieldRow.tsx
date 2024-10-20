import Field from "@/components/Field/Field";
import styles from "./FieldRow.module.css";
import Image from "next/image";

const FieldRow = () => {
  const removeMetadata = () => console.log("//TODO");

  return (
    <div className={styles.metadataFieldRow}>
      <Field label="Name" />
      <Field label="Value" />
      <Image
        src="/Images/trash.png"
        width={24}
        height={24}
        alt="delete"
        onClick={removeMetadata}
        className={styles.trash}
      />
    </div>
  );
};
export default FieldRow;
