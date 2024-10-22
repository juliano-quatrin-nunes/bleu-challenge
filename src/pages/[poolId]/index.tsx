import EditMetadataContainer from "@/components/EditMetadataContainer";
import PoolHeader from "@/components/PoolHeader/PoolHeader";
import VisualizeMetadataContainer from "@/components/VisualizeMetadataContainer";
import { useReadIpfsJson } from "@/hooks/pinata";
import styles from "@/styles/Pool.module.css";
import { abi } from "@/utils/abi";
import { useRouter } from "next/router";
import { useState } from "react";
import { useReadContract } from "wagmi";

const contractId = "0x61FD2dedA9c8a1ddb9F3F436D548C58643936f02";
const poolIdHex =
  "0xe13ab90f74c371ac2e8a531bf80f08b4d90cffff000200000000000000000161";

const Visualize = () => {
  const { data: cid } = useReadContract({
    abi,
    address: contractId,
    functionName: "poolIdMetadataCIDMap",
    args: [poolIdHex],
  });

  const { data: metadata } = useReadIpfsJson(cid);

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const router = useRouter();
  const poolId = router.query?.poolId as string;

  const toggleEditMode = () => setIsEditMode((prevState) => !prevState);

  return (
    metadata && (
      <div className={styles.container}>
        <div className={styles.poolInfo}>
          <PoolHeader poolId={poolId} />
          <div className={styles.metadataContainer}>
            {isEditMode ? (
              <EditMetadataContainer
                metadata={metadata}
                toggleEditMode={toggleEditMode}
              />
            ) : (
              <VisualizeMetadataContainer
                metadata={metadata}
                toggleEditMode={toggleEditMode}
              />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Visualize;
