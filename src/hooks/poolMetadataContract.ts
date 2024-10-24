import { abi } from '@/utils/abi'
import { contractId } from '@/utils/utils'
import { useQueryClient } from '@tanstack/react-query'
import { Hex } from 'viem'
import { sepolia } from 'viem/chains'
import { useAccount, useReadContract, useWatchContractEvent, useWriteContract } from 'wagmi'

export function usePoolMetadataCid(poolId: Hex) {
  return useReadContract({
    abi,
    address: contractId,
    functionName: 'poolIdMetadataCIDMap',
    args: [poolId],
  })
}

export function usePoolMetadataUpdatedEvent(poolId: Hex) {
  const queryClient = useQueryClient()
  const { queryKey } = usePoolMetadataCid(poolId)

  useWatchContractEvent({
    abi,
    address: contractId,
    eventName: 'PoolMetadataUpdated',
    args: { poolId },
    onLogs(logs) {
      queryClient.setQueryData(queryKey, logs[logs.length - 1].args.metadataCID)
    },
  })
}

export function useUpdateMetadataCid(poolId: Hex) {
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
