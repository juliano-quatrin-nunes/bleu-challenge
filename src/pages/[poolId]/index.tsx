import EditMetadataContainer from '@/components/EditMetadataContainer'
import PoolHeader from '@/components/PoolHeader/PoolHeader'
import VisualizeMetadataContainer from '@/components/VisualizeMetadataContainer'
import { useReadIpfsJson } from '@/hooks/pinata'
import styles from '@/styles/Pool.module.css'
import { abi } from '@/utils/abi'
import { contractId } from '@/utils/utils'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Hex } from 'viem'
import { useReadContract } from 'wagmi'

const Visualize = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const router = useRouter()

  const poolId = router.query?.poolId as Hex

  const { data: cid, queryKey } = useReadContract({
    abi,
    address: contractId,
    functionName: 'poolIdMetadataCIDMap',
    args: [poolId],
  })

  const { data: metadata } = useReadIpfsJson(cid)

  const toggleEditMode = () => setIsEditMode((prevState) => !prevState)

  return (
    metadata && (
      <div className={styles.container}>
        <div className={styles.poolInfo}>
          <PoolHeader poolId={poolId} />
          <div className={styles.metadataContainer}>
            {isEditMode ? (
              <EditMetadataContainer metadata={metadata} toggleEditMode={toggleEditMode} poolId={poolId} />
            ) : (
              <VisualizeMetadataContainer metadata={metadata} toggleEditMode={toggleEditMode} queryKey={queryKey} />
            )}
          </div>
        </div>
      </div>
    )
  )
}

export default Visualize
