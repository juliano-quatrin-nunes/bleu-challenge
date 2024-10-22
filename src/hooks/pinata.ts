import { fetchJsonByCid } from "@/api/pinata";
import { useQuery } from "@tanstack/react-query";

export function useReadIpfsJson(cid?: string) {
  const queryKey = ["read-json", cid];

  const query = useQuery({
    queryKey,
    queryFn: () => fetchJsonByCid(cid),
    enabled: !!cid,
  });

  return { ...query, queryKey };
}
