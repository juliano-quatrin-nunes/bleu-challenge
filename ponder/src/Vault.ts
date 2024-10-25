import { ponder } from '@/generated'

ponder.on('Vault:PoolRegistered', async ({ event, context }) => {
  const { CreatedPool } = context.db

  await CreatedPool.create({
    id: event.args.poolId,
    data: {
      owner: event.transaction.from,
      timestamp: String(event.block.timestamp),
    },
  })
})
