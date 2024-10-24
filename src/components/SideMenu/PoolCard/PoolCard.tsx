import { useRouter } from 'next/router'
import styles from './PoolCard.module.css'

interface PoolCardProps {
  poolId: string
  timestamp: string
  poolIndex: number
}

const PoolCard = (props: PoolCardProps) => {
  const { poolId, timestamp, poolIndex } = props

  const router = useRouter()

  const reducedPoolId = poolId.slice(0, 5) + '...' + poolId.slice(-3)

  const creationDate = new Date(Number(timestamp) * 1000)
  const parsedDate = creationDate.toLocaleDateString('pt-BR')

  const handleOnCardClick = () => router.push(poolId)

  return (
    <div className={styles.card} onClick={handleOnCardClick}>
      <div className={styles.title}>Pool {poolIndex + 1}</div>
      <div className={styles.poolInfoRow}>
        Pool ID:
        <div className={styles.info}>{reducedPoolId}</div>
      </div>
      <div className={styles.poolInfoRow}>
        Created at:
        <div className={styles.info}>{parsedDate}</div>
      </div>
    </div>
  )
}

export default PoolCard
