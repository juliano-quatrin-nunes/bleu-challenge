import styles from './PoolHeader.module.css'

interface PoolHeaderProps {
  poolId: string
}

const PoolHeader = ({ poolId }: PoolHeaderProps) => {
  return (
    <div>
      <h1 className={styles.title}>Pool Info</h1>
      <div className={styles.poolIdContainer}>
        <h3>Pool ID</h3>
        <h3 className={styles.primaryTextColor}>{poolId}</h3>
      </div>
    </div>
  )
}

export default PoolHeader
