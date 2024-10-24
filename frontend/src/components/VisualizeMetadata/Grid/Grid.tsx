import styles from './Grid.module.css'
import InfoLabel from '../InfoLabel/InfoLabel'
import { Hex } from 'viem'
import { usePoolMetadataCid } from '@/hooks/poolMetadataContract'
import { useReadIpfsJson } from '@/hooks/pinata'

interface GridProps {
  poolId: Hex
}

const Grid = ({ poolId }: GridProps) => {
  const { data: cid, isSuccess, isLoading } = usePoolMetadataCid(poolId)
  const { data: metadata } = useReadIpfsJson(cid)

  if (isLoading) return <div className={styles.metadataGrid}>Loading metadata info...</div>
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
