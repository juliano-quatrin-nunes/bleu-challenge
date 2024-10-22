import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ReactNode } from 'react'
import styles from './layout.module.css'

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
