import EditMetadataContainer from '@/components/EditMetadataContainer'
import PoolHeader from '@/components/PoolHeader/PoolHeader'
import VisualizeMetadataContainer from '@/components/VisualizeMetadataContainer'
import { useFetchIpfsJson } from '@/hooks/useFetchIpfsJson'
import { useWatchPoolMetadataUpdated } from '@/hooks/useWatchPoolMetadataUpdated'
import { useGetPoolMetadataCid } from '@/hooks/useGetPoolMetadataCid'
import styles from '@/styles/Pool.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Hex } from 'viem'

const Visualize = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const router = useRouter()

  const poolId = router.query?.poolId as Hex

  const { data: cid } = useGetPoolMetadataCid(poolId)
  const { data: metadata } = useFetchIpfsJson(cid)
  useWatchPoolMetadataUpdated(poolId)

  const toggleEditMode = () => setIsEditMode((prevState) => !prevState)

  return (
    <div className={styles.container}>
      <div className={styles.poolInfo}>
        <PoolHeader poolId={poolId} />
        <div className={styles.metadataContainer}>
          {metadata && isEditMode ? (
            <EditMetadataContainer metadata={metadata} toggleEditMode={toggleEditMode} poolId={poolId} />
          ) : (
            <VisualizeMetadataContainer toggleEditMode={toggleEditMode} poolId={poolId} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Visualize
