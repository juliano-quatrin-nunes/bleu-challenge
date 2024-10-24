import { Hex } from 'viem'
import Grid from './VisualizeMetadata/Grid/Grid'
import VisualizeHeader from './VisualizeMetadata/Header/VisualizeHeader'

interface VisualizeMetadataContainerProps {
  toggleEditMode: () => void
  poolId: Hex
}

const VisualizeMetadataContainer = (props: VisualizeMetadataContainerProps) => {
  const { toggleEditMode, poolId } = props

  return (
    <>
      <VisualizeHeader toggleEditMode={toggleEditMode} />
      <Grid poolId={poolId} />
    </>
  )
}

export default VisualizeMetadataContainer
