import { graphql } from '@/gql'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'

const PROD_PONDER_URL = 'https://bleu-challenge-production.up.railway.app/'
const DEV_PONDER_URL = 'http://localhost:42069'

const allPoolsOwnedBy = graphql(`
  query allPoolsOwnedBy($ownerId: String!) {
    createdPools(where: { owner: $ownerId }) {
      items {
        id
        timestamp
      }
    }
  }
`)

export function useOwnedPools(ownerId: string) {
  const queryKey = ['pools-owned-by', ownerId]

  const query = useQuery({
    queryKey,
    queryFn: async () =>
      request(process.env.NODE_ENV == 'production' ? PROD_PONDER_URL : DEV_PONDER_URL, allPoolsOwnedBy, { ownerId }),
  })

  return { queryKey, ...query }
}
