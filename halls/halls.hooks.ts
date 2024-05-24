import { useQuery } from "@tanstack/react-query";
import fetchHalls from "./halls.queries";

export const useGetHalls = (location_id: number) => {
  return useQuery({
    queryKey: ["halls", location_id],
    queryFn: () => fetchHalls(location_id),
  });
};
