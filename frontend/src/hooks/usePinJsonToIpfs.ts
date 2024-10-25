import { pinJsonToIpfs, PinMutationResponse } from '@/api/pinata'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function usePinJsonToIpfs() {
  const mutationKey = ['pin-json']

  const mutation = useMutation<PinMutationResponse, AxiosError, Record<string, string>>({
    mutationKey,
    mutationFn: pinJsonToIpfs,
  })

  return { ...mutation, mutationKey }
}
