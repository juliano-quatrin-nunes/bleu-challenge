import { graphql } from '@/gql'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import { env } from 'process'

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

export function usePoolsOwnedBy(ownerId: string) {
  const queryKey = ['pools-owned-by', ownerId]

  const query = useQuery({
    queryKey,
    queryFn: async () =>
      request(env.NODE_ENV == 'development' ? DEV_PONDER_URL : PROD_PONDER_URL, allPoolsOwnedBy, { ownerId }),
  })

  return { queryKey, ...query }
}
