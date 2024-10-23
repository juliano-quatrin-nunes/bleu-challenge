import { ponder } from "@/generated";

ponder.on("WeightedPoolFactory:PoolCreated", async ({ event, context }) => {
  const { CreatedPool } = context.db;

  await CreatedPool.create({
    id: event.args.pool,
    data: {
      owner: event.transaction.from,
      timestamp: String(event.block.timestamp),
    },
  });
});
