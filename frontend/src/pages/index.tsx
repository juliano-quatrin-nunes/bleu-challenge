import TextField from '@/components/TextField/TextField'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      router.push((event.target as HTMLInputElement).value)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Enter the pool address to view and manage its metadata</div>
      <TextField placeholder="Pool address" className={styles.field} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default HomePage
