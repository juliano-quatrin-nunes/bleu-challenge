import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ReactNode } from 'react'
import styles from './layout.module.css'
import SideMenu from '@/components/SideMenu/SideMenu'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const handleHomeClick = () => router.push('/')

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.header}>
        <Image
          src="/Images/Blue_Profile.webp"
          width={48}
          height={48}
          alt="Home"
          onClick={handleHomeClick}
          className={styles.homeButton}
        />
        <ConnectButton />
      </div>
      <div className={styles.row}>
        <SideMenu />
        {children}
      </div>
    </div>
  )
}

export default Layout
