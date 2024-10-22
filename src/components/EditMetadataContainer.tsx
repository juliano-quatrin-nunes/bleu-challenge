import { convertRecordToMetadataArray, FormValues } from "@/utils/utils";
import { Form, Formik } from "formik";
import Footer from "./EditMetadata/Footer/Footer";
import EditHeader from "./EditMetadata/Header/EditHeader";
import List from "./EditMetadata/List/List";

interface EditMetadataContainerProps {
  metadata: Record<string, string>;
  toggleEditMode: () => void;
}

const EditMetadataContainer = (props: EditMetadataContainerProps) => {
  const { metadata, toggleEditMode } = props;

  const initialValues = convertRecordToMetadataArray(metadata);

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    toggleEditMode();
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
