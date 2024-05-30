import { useQuery } from "@tanstack/react-query";
import fetchSelfwashes from "./selfwashes.queries";

export const useGetSelfWashes = (location_id: number) => {
  return useQuery({
    queryKey: ["selfwashes", location_id],
    queryFn: () => fetchSelfwashes(location_id),
  });
};
