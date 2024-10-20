import styles from "@/styles/Pool.module.css";
import InfoLabel from "./InfoLabel";

interface MetadataGridProps {
  metadata: Record<string, string>;
}

const MetadataGrid = (props: MetadataGridProps) => {
  return (
    <div className={styles.metadataGrid}>
      {Object.entries(props.metadata).map((record, index) => (
        <InfoLabel label={record[0]} key={index}>
          {record[1]}
        </InfoLabel>
      ))}
    </div>
  );
};

export default MetadataGrid;
