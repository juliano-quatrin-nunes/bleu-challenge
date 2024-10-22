import Button from "@/components/Button/Button";
import styles from "./VisualizeHeader.module.css";
import { useRouter } from "next/router";

interface VisualizeHeaderProps {
  toggleEditMode: () => void;
}

const VisualizeHeader = (props: VisualizeHeaderProps) => {
  const { toggleEditMode } = props;

  const router = useRouter();

  return (
    <div className={styles.spaceBetweenRow}>
      <h3>View Metadata</h3>
      <Button primary onClick={toggleEditMode}>
        Edit
      </Button>
    </div>
  );
};

export default VisualizeHeader;
