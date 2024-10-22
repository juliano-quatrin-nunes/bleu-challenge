import { convertRecordToMetadataArray, FormValues } from "@/utils/utils";
import { Form, Formik } from "formik";
import Footer from "./EditMetadata/Footer/Footer";
import EditHeader from "./EditMetadata/Header/EditHeader";
import List from "./EditMetadata/List/List";

interface EditMetadataContainerProps {
  metadata: Record<string, string>;
}

const EditMetadataContainer = (props: EditMetadataContainerProps) => {
  const { metadata } = props;

  const initialValues = convertRecordToMetadataArray(metadata);

  return (
    <Formik<FormValues>
      initialValues={{ metadata: initialValues }}
      onSubmit={(values) => console.log(values)}
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
