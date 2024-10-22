import {
  convertRecordToMetadataArray,
  FormValues,
  metadataArrayToRecord,
} from "@/utils/utils";
import { Form, Formik } from "formik";
import Footer from "./EditMetadata/Footer/Footer";
import EditHeader from "./EditMetadata/Header/EditHeader";
import List from "./EditMetadata/List/List";
import { PinMutationReponse, usePinJsonToIpfs } from "@/hooks/pinata";
import { useWriteContract } from "wagmi";
import { abi } from "@/utils/abi";

interface EditMetadataContainerProps {
  metadata: Record<string, string>;
  toggleEditMode: () => void;
}

const contractId = "0x61FD2dedA9c8a1ddb9F3F436D548C58643936f02";
const poolIdHex =
  "0xe13ab90f74c371ac2e8a531bf80f08b4d90cffff000200000000000000000161";

const EditMetadataContainer = (props: EditMetadataContainerProps) => {
  const { metadata, toggleEditMode } = props;

  const { writeContract } = useWriteContract({
    mutation: { onSuccess: toggleEditMode },
  });
  const { mutate } = usePinJsonToIpfs();

  const initialValues = convertRecordToMetadataArray(metadata);

  const writeCidToPool = (data: PinMutationReponse) => {
    writeContract({
      abi,
      address: contractId,
      functionName: "setPoolMetadata",
      args: [poolIdHex, data.IpfsHash],
    });
  };

  const handleSubmit = (values: FormValues) => {
    const metadata = metadataArrayToRecord(values.metadata);

    mutate(metadata, {
      onSuccess: writeCidToPool,
    });
  };

  return (
    <Formik<FormValues>
      initialValues={{ metadata: initialValues }}
      onSubmit={handleSubmit}
      onReset={toggleEditMode}
    >
      {() => (
        <Form>
          <EditHeader />
          <List />
          <Footer />
        </Form>
      )}
    </Formik>
  );
};

export default EditMetadataContainer;
