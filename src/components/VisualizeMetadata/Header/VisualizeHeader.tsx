import Button from "@/components/Button/Button";
import styles from "./VisualizeHeader.module.css";
import { useRouter } from "next/router";

const VisualizeHeader = () => {
  const router = useRouter();

  return (
    <div className={styles.spaceBetweenRow}>
      <h3>View Metadata</h3>
      <Button
        primary
        onClick={() => router.push(`/${router.query.poolId}/edit`)}
      >
        Edit
      </Button>
    </div>
  );
};

export default VisualizeHeader;
