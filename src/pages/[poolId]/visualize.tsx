import PoolHeader from "@/components/PoolHeader";
import ViewMetadataHeader from "@/components/ViewMetadataHeader";
import styles from "@/styles/Pool.module.css";
import { useRouter } from "next/router";

type MetaDataType = Record<string, string>;

const Visualize = () => {
  const router = useRouter();
  const poolId = router.query?.poolId as string;

  const metaData: MetaDataType = {
    teste1: "value1",
    teste2: "value2",
  };

  return (
    <div className={styles.container}>
      <div className={styles.poolInfo}>
        <PoolHeader poolId={poolId} />
        <div className={styles.metadataContainer}>
          <ViewMetadataHeader />
        </div>
      </div>
    </div>
  );
};

export default Visualize;
