import styles from "@/styles/Pool.module.css";

const ViewMetadataHeader = () => {
  return (
    <div className={styles.spaceBetweenRow}>
      <h3>View Metadata</h3>
      <button className={`${styles.button} ${styles.primary}`}>
        Edit metadata
      </button>
    </div>
  );
};

export default ViewMetadataHeader;
