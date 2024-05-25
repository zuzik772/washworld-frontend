import { useQuery } from "@tanstack/react-query";
import fetchStatuses from "./statuses.queries";

export const useGetStatuses = () => {
  return useQuery({
    queryKey: ["statuses"],
    queryFn: fetchStatuses,
  });
};
