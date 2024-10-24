import { ponder } from "@/generated";
import { weightedPoolAbi } from "../abis/WeightedPoolAbi";

ponder.on("WeightedPoolFactory:PoolCreated", async ({ event, context }) => {
  const { CreatedPool } = context.db;
  const { client } = context;

  const poolId = await client.readContract({
    abi: weightedPoolAbi,
    address: event.args.pool,
    functionName: "getPoolId",
  });

  await CreatedPool.create({
    id: poolId,
    data: {
      owner: event.transaction.from,
      timestamp: String(event.block.timestamp),
    },
  });
});
