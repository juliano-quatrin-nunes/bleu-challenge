import { fetchJsonByCid, pinJsonToIpfs } from '@/api/pinata'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type PinMutationReponse = {
  IpfsHash: string
  PinSize: number
  Timestamp: string
  isDuplicate: boolean
}

export function useReadIpfsJson(cid?: string) {
  const queryKey = ['read-json', cid]

  const query = useQuery({
    queryKey,
    queryFn: () => fetchJsonByCid(cid),
    enabled: !!cid,
  })

  return { ...query, queryKey }
}

export function usePinJsonToIpfs() {
  const mutationKey = ['pin-json']

  const mutation = useMutation<PinMutationReponse, AxiosError, Record<string, string>>({
    mutationKey,
    mutationFn: pinJsonToIpfs,
  })

  return { ...mutation, mutationKey }
}
