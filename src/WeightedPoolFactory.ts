import { ponder } from "@/generated";

ponder.on("WeightedPoolFactory:FactoryDisabled", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("WeightedPoolFactory:PoolCreated", async ({ event, context }) => {
  console.log(event.args);
});
