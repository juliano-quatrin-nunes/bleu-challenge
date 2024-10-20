import styles from "@/styles/Pool.module.css";
import InfoLabel from "./InfoLabel";

interface MetadataGridProps {
  metadata: Record<string, string>;
}

const MetadataGrid = ({ metadata }: MetadataGridProps) => {
  return (
    <div className={styles.metadataGrid}>
      {Object.entries(metadata).map((record, index) => (
        <InfoLabel label={record[0]} key={index}>
          {record[1]}
        </InfoLabel>
      ))}
    </div>
  );
};

export default MetadataGrid;
