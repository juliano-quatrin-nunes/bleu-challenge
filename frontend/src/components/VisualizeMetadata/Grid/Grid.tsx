import styles from './Grid.module.css'
import InfoLabel from '../InfoLabel/InfoLabel'
import { Hex } from 'viem'
import { useGetPoolMetadataCid } from '@/hooks/useGetPoolMetadataCid'
import { useFetchIpfsJson } from '@/hooks/useFetchIpfsJson'

interface GridProps {
  poolId: Hex
}

const Grid = ({ poolId }: GridProps) => {
  const { data: cid, isSuccess: isSuccessCid, isLoading: isLoadingCid } = useGetPoolMetadataCid(poolId)
  const { data: metadata, isSuccess: isSuccessMetadata, isLoading: isLoadingMetadata } = useFetchIpfsJson(cid)

  const isAnyQueryLoading = isLoadingCid || isLoadingMetadata
  const hasNoMetadataCid = isSuccessCid && !cid
  const isFileEmpty = isSuccessMetadata && !Object.entries(metadata).length

  if (isAnyQueryLoading) return <div className={styles.metadataGrid}>Loading metadata info...</div>
  if (hasNoMetadataCid || isFileEmpty) return <div className={styles.metadataGrid}>This pool has no metadata</div>

  if (metadata && !isFileEmpty)
    return (
      <div className={styles.metadataGrid}>
        {Object.entries(metadata).map((record, index) => (
          <InfoLabel label={record[0]} key={index}>
            {record[1]}
          </InfoLabel>
        ))}
      </div>
    )
}

export default Grid
