import EditMetadataContainer from '@/components/EditMetadataContainer'
import PoolHeader from '@/components/PoolHeader/PoolHeader'
import VisualizeMetadataContainer from '@/components/VisualizeMetadataContainer'
import { useReadIpfsJson } from '@/hooks/pinata'
import { usePoolMetadataCid, usePoolMetadataUpdatedEvent } from '@/hooks/poolMetadataContract'
import styles from '@/styles/Pool.module.css'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Hex } from 'viem'

const Visualize = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const router = useRouter()

  const poolId = router.query?.poolId as Hex

  const queryClient = useQueryClient()
  const { data: cid, isSuccess } = usePoolMetadataCid(poolId)
  const { data: metadata, queryKey: ipfsQueryKey } = useReadIpfsJson(cid)
  usePoolMetadataUpdatedEvent(poolId)

  const toggleEditMode = () => setIsEditMode((prevState) => !prevState)

  useEffect(() => {
    isSuccess && !cid && queryClient.setQueryData(ipfsQueryKey, {})
  }, [isSuccess])

  return (
    <div className={styles.container}>
      <div className={styles.poolInfo}>
        <PoolHeader poolId={poolId} />
        <div className={styles.metadataContainer}>
          {metadata && isEditMode ? (
            <EditMetadataContainer metadata={metadata} toggleEditMode={toggleEditMode} poolId={poolId} />
          ) : (
            <VisualizeMetadataContainer metadata={metadata} toggleEditMode={toggleEditMode} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Visualize
