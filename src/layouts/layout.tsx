import { ReactNode } from 'react'
import styles from './layout.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.header}>
        <ConnectButton />
      </div>
      {children}
    </div>
  )
}

export default Layout
