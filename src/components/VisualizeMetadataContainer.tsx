import { QueryKey } from '@tanstack/react-query'
import Grid from './VisualizeMetadata/Grid/Grid'
import VisualizeHeader from './VisualizeMetadata/Header/VisualizeHeader'

interface VisualizeMetadataContainerProps {
  metadata: Record<string, string>
  toggleEditMode: () => void
  queryKey: QueryKey
}

const VisualizeMetadataContainer = (props: VisualizeMetadataContainerProps) => {
  const { metadata, toggleEditMode, queryKey } = props

  return (
    <>
      <VisualizeHeader toggleEditMode={toggleEditMode} queryKey={queryKey} />
      <Grid metadata={metadata} />
    </>
  )
}

export default VisualizeMetadataContainer
