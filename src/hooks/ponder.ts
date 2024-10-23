import { graphql } from '@/gql'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'

const allPoolsOwnedBy = graphql(`
  query allPoolsOwnedBy($ownerId: String!) {
    createdPools(where: { owner: $ownerId }) {
      items {
        owner
      }
    }
  }
`)

export function usePoolsOwnedBy(ownerId: string) {
  const queryKey = ['pools-owned-by', ownerId]

  const query = useQuery({
    queryKey,
    queryFn: async () => request('http://localhost:42069', allPoolsOwnedBy, { ownerId }),
  })

  return { queryKey, ...query }
}
