import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import fetchStatuses, { updateHallStatus } from "./statuses.queries";
import { Status } from "../types/Location";

export const useGetStatuses = () => {
  return useQuery({
    queryKey: ["statuses"],
    queryFn: fetchStatuses,
  });
};

export const useUpdateHallStatus = (
  hall_id: number,
  newStatusID: Partial<Status>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => updateHallStatus(hall_id, newStatusID),
    ////When the mutation is successful, it invalidates the cache for the query with the key ["statuses"]. This means that the next time you call useGetStatuses, it will re-fetch the data because the cache for that query key has been invalidated.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["statuses"] });
    },
    // helper options that allow quick and easy side-effects at any stage during the mutation lifecycle: onMutate, onError, onSuccess, onSettled
  });
};
