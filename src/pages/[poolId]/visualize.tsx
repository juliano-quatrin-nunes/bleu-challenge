import PoolHeader from "@/components/PoolHeader/PoolHeader";
import Grid from "@/components/VisualizeMetadata/Grid/Grid";
import Header from "@/components/VisualizeMetadata/Header/VisualizeHeader";
import styles from "@/styles/Pool.module.css";
import { abi } from "@/utils/abi";
import { useRouter } from "next/router";
import { useReadContract } from "wagmi";

type MetaDataType = Record<string, string>;

const contractId = "0x61FD2dedA9c8a1ddb9F3F436D548C58643936f02";
const poolIdHex =
  "0xe13ab90f74c371ac2e8a531bf80f08b4d90cffff000200000000000000000161";

const Visualize = () => {
  const { data, isLoading, error } = useReadContract({
    abi,
    address: contractId,
    functionName: "poolIdMetadataCIDMap",
    args: [poolIdHex],
  });

  console.log(data, isLoading, error);

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
