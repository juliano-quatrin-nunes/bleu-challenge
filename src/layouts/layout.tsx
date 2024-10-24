import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ReactNode } from 'react'
import styles from './layout.module.css'
import SideMenu from '@/components/SideMenu/SideMenu'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.header}>
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
