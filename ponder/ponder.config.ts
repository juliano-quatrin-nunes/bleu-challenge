import { createConfig } from "@ponder/core";
import { http } from "viem";

import { WeightedPoolFactoryAbi } from "./abis/WeightedPoolFactoryAbi";

export default createConfig({
  networks: {
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.PONDER_RPC_URL_11155111),
    },
  },
  contracts: {
    WeightedPoolFactory: {
      abi: WeightedPoolFactoryAbi,
      address: "0x7920bfa1b2041911b354747ca7a6cdd2dfc50cfd",
      network: "sepolia",
      startBlock: 3424893,
    },
  },
});
