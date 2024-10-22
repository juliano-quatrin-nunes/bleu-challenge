import Button from "@/components/Button/Button";
import Footer from "@/components/EditMetadata/Footer/Footer";
import EditHeader from "@/components/EditMetadata/Header/EditHeader";
import List from "@/components/EditMetadata/List/List";
import PoolHeader from "@/components/PoolHeader/PoolHeader";
import styles from "@/styles/Pool.module.css";
import { abi } from "@/utils/abi";
import { convertRecordToMetadataArray, FormValues } from "@/utils/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useWriteContract } from "wagmi";

type MetaDataType = Record<string, string>;

const poolIdHex =
  "0xe13ab90f74c371ac2e8a531bf80f08b4d90cffff000200000000000000000161";
const contractId = "0x61FD2dedA9c8a1ddb9F3F436D548C58643936f02";
const CID = "QmP6KNc2rwd84Li3iQApfzeGM4HA8w5q3Cr6fgjSSkf7QB";

const Visualize = () => {
  const { writeContract, data, error, isSuccess } = useWriteContract();

  console.log(data, isSuccess, error, CID.length);

  const writeCIDtoContract = () =>
    writeContract({
      abi: abi,
      address: contractId,
      functionName: "setPoolMetadata",
      args: [poolIdHex, CID],
    });

  const router = useRouter();
  const poolId = router.query?.poolId as string;

  const metadataRecord: MetaDataType = {
    teste1: "value1",
    teste2: "value2",
    teste3: "value3",
    teste4: "value4",
    teste5: "value5",
  };

  const initialValues = convertRecordToMetadataArray(metadataRecord);
  console.log(initialValues);

  return (
    <div className={styles.container}>
      <div className={styles.poolInfo}>
        <Button onClick={writeCIDtoContract}>write cid</Button>
        <ConnectButton />
        <PoolHeader poolId={poolId} />

        <Formik<FormValues>
          initialValues={{ metadata: initialValues }}
          onSubmit={(values) => console.log(values)}
        >
          {() => (
            <Form className={styles.metadataContainer}>
              <EditHeader />
              <List />
              <Footer />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Visualize;
