import PoolHeader from "@/components/PoolHeader/PoolHeader";
import Grid from "@/components/VisualizeMetadata/Grid/Grid";
import Header from "@/components/VisualizeMetadata/Header/VisualizeHeader";
import styles from "@/styles/Pool.module.css";
import { useRouter } from "next/router";

type MetaDataType = Record<string, string>;

const Visualize = () => {
  const router = useRouter();
  const poolId = router.query?.poolId as string;

  const metadata: MetaDataType = {
    teste1: "value1",
    teste2: "value2",
    teste3: "value3",
    teste4: "value4",
    teste5: "value5",
  };

  return (
    <div className={styles.container}>
      <div className={styles.poolInfo}>
        <PoolHeader poolId={poolId} />
        <div className={styles.metadataContainer}>
          <Header />
          <Grid metadata={metadata} />
        </div>
      </div>
    </div>
  );
};

export default Visualize;
