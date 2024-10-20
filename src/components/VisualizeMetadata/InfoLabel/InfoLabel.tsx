import styles from "./InfoLabel.module.css";

interface InfoLabelProps {
  label: string;
  children: string;
}

const InfoLabel = ({ children, label }: InfoLabelProps) => {
  return (
    <div className={styles.infoLabel}>
      <h4>{label}</h4>
      {children}
    </div>
  );
};
export default InfoLabel;
