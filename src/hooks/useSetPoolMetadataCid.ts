import { abi } from '@/utils/abi'
import { contractId } from '@/utils/utils'
import { Hex } from 'viem'
import { sepolia } from 'viem/chains'
import { useAccount, useWriteContract } from 'wagmi'

export function useSetPoolMetadataCid(poolId: Hex) {
  const { address } = useAccount()
  const { writeContract, ...rest } = useWriteContract()

  const writeCidToContract = (cid: string, onSuccess: () => void) =>
    writeContract(
      {
        abi,
        account: address,
        address: contractId,
        chain: sepolia,
        functionName: 'setPoolMetadata',
        args: [poolId, cid],
      },
      { onSuccess }
    )

  return { writeCidToContract, ...rest }
}
