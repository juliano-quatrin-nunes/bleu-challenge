import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";
import { abi } from "../utils/abi";

//const poolId =
//  "0x83a48fbcfc991335314e74d0496aab6a1987e992ddc85dddbcc4d6dd6ef2e9fc";

const poolId =
  "0xe13ab90f74c371ac2e8a531bf80f08b4d90cffff000200000000000000000161";
const contractId = "0x61FD2dedA9c8a1ddb9F3F436D548C58643936f02";

export default function Home() {
  const { address } = useAccount();
  const { data, isSuccess, error } = useReadContract({
    abi,
    address: contractId,
    functionName: "poolIdMetadataCIDMap",
    args: [poolId],
  });

  console.log(data, isSuccess, error);

  return (
    <>
      <ConnectButton />
      {address && address}
      {data && data}
    </>
  );
}
