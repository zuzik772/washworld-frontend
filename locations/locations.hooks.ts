import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import fetchLocations from "./locations.queries";
import { Location } from "../types/location";

export const useGetLocations = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
  });
};

// export const useUpdateLocation = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (locationData: Location) => {
//       await updateLocation(locationData);
//     },
//     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["locations"] }),
//   });
// };
