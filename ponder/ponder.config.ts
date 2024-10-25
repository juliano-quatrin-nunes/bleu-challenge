import { createConfig } from '@ponder/core'
import { http } from 'viem'
import { VaultAbi } from './abis/VaultAbi'

export default createConfig({
  networks: {
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.PONDER_RPC_URL_11155111),
    },
  },
  contracts: {
    Vault: {
      abi: VaultAbi,
      address: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
      network: 'sepolia',
      startBlock: 3418831,
    },
  },
})
