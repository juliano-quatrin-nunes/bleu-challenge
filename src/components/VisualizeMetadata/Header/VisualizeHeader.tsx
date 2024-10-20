import Button from "@/components/Button/Button";
import styles from "./VisualizeHeader.module.css";

const VisualizeHeader = () => {
  return (
    <div className={styles.spaceBetweenRow}>
      <h3>View Metadata</h3>
      <Button primary />
    </div>
  );
};

export default VisualizeHeader;
