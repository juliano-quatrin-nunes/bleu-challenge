import styles from "./List.module.css";
import MetadataFieldRow from "../FieldRow/FieldRow";
import { convertRecordToMetadataArray } from "@/utils/utils";

interface MetadataGridProps {
  metadataRecord: Record<string, string>;
}

const List = ({ metadataRecord }: MetadataGridProps) => {
  const initialValues = convertRecordToMetadataArray(metadataRecord);

  return (
    <div className={styles.metadataList}>
      <MetadataFieldRow />
    </div>
  );
};

export default List;
