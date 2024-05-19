import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import fetchLocations, { updateLocation } from "./locations.queries";
import { location } from "../types/location";

export const useGetLocations = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
  });
};

export const useUpdateLocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (locationData: location) => {
      await updateLocation(locationData);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["locations"] }),
  });
};
