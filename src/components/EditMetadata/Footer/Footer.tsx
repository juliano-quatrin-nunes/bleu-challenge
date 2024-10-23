import Button from '@/components/Button/Button'
import styles from './Footer.module.css'
import { useAccount } from 'wagmi'

const Footer = () => {
  const { isConnected } = useAccount()

  return (
    <div className={styles.spaceBetweenRow}>
      <Button type="reset">Cancel</Button>
      <Button primary type="submit" disabled={!isConnected}>
        {!isConnected ? 'Connect to wallet' : 'Save'}
      </Button>
    </div>
  )
}

export default Footer
