import { useQuery } from "@tanstack/react-query";
import fetchLocations from "./locations.queries";

export const useGetLocations = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
  });
};
