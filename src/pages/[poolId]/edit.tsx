import Button from "@/components/Button/Button";
import Footer from "@/components/EditMetadata/Footer/Footer";
import EditHeader from "@/components/EditMetadata/Header/EditHeader";
import List from "@/components/EditMetadata/List/List";
import PoolHeader from "@/components/PoolHeader/PoolHeader";
import styles from "@/styles/Pool.module.css";
import { pinata } from "@/utils/pinata";
import { convertRecordToMetadataArray, FormValues } from "@/utils/utils";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";

type MetaDataType = Record<string, string>;

const Visualize = () => {
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

  const upload = () =>
    pinata.upload
      .json(metadataRecord)
      .then((value) => console.log(value.IpfsHash));

  return (
    <div className={styles.container}>
      <div className={styles.poolInfo}>
        <PoolHeader poolId={poolId} />
        <Button onClick={upload}>Upload</Button>

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
