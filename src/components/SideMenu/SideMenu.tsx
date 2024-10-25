import { useOwnedPools } from '@/hooks/useOwnedPools'
import styles from './SideMenu.module.css'
import { useAccount } from 'wagmi'
import PoolCard from './PoolCard/PoolCard'

const SideMenu = () => {
  const { address } = useAccount()
  const { data } = useOwnedPools(address ?? '')

  const userNotConnected = !address

  return (
    <div className={styles.sideMenu}>
      <h3 className={styles.title}>Your Pools</h3>
      {userNotConnected
        ? 'Connect your account to see your pools.'
        : data &&
          data.createdPools?.items?.map((item, index) => (
            <PoolCard key={index} poolId={item.id} timestamp={item.timestamp} poolIndex={index} />
          ))}
    </div>
  )
}

export default SideMenu
