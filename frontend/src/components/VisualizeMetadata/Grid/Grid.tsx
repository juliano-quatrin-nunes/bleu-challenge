import styles from './Grid.module.css'
import InfoLabel from '../InfoLabel/InfoLabel'
import { Hex } from 'viem'
import { useGetPoolMetadataCid } from '@/hooks/useGetPoolMetadataCid'
import { useFetchIpfsJson } from '@/hooks/useFetchIpfsJson'

interface GridProps {
  poolId: Hex
}

const Grid = ({ poolId }: GridProps) => {
  const { data: cid, isSuccess, isLoading: isLoadingCid } = useGetPoolMetadataCid(poolId)
  const { data: metadata, isLoading: isLoadingMetadata } = useFetchIpfsJson(cid)

  if (isLoadingCid || isLoadingMetadata) return <div className={styles.metadataGrid}>Loading metadata info...</div>
  if (isSuccess && !cid) return <div className={styles.metadataGrid}>This pool has no metadata</div>

  if (metadata)
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
