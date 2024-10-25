import { abi } from '@/utils/abi'
import { contractId } from '@/utils/utils'
import { useQueryClient } from '@tanstack/react-query'
import { Hex } from 'viem'
import { useWatchContractEvent } from 'wagmi'
import { useGetPoolMetadataCid } from './useGetPoolMetadataCid'

export function useWatchPoolMetadataUpdated(poolId: Hex) {
  const queryClient = useQueryClient()
  const { queryKey } = useGetPoolMetadataCid(poolId)

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
