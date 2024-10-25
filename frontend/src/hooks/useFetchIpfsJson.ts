import { fetchJsonByCid } from '@/api/pinata'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function useFetchIpfsJson(cid?: string) {
  const queryKey = ['read-json', cid]

  const query = useQuery<Record<string, string>, AxiosError>({
    queryKey,
    queryFn: () => fetchJsonByCid(cid),
    enabled: !!cid,
  })

  return { ...query, queryKey }
}
