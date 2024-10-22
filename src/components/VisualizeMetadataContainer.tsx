import Grid from "./VisualizeMetadata/Grid/Grid";
import VisualizeHeader from "./VisualizeMetadata/Header/VisualizeHeader";

interface VisualizeMetadataContainerProps {
  metadata: Record<string, string>;
  toggleEditMode: () => void;
}

const VisualizeMetadataContainer = (props: VisualizeMetadataContainerProps) => {
  const { metadata, toggleEditMode } = props;

  return (
    <>
      <VisualizeHeader toggleEditMode={toggleEditMode} />
      <Grid metadata={metadata} />
    </>
  );
};

export default VisualizeMetadataContainer;
