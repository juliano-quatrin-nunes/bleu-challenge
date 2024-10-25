import { abi } from '@/utils/abi'
import { contractId } from '@/utils/utils'
import { Hex } from 'viem'
import { useReadContract } from 'wagmi'

export function useGetPoolMetadataCid(poolId: Hex) {
  return useReadContract({
    abi,
    address: contractId,
    functionName: 'poolIdMetadataCIDMap',
    args: [poolId],
  })
}
