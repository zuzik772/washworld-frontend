import { Hall, Status } from "../types/Location";

export const getLocationStatus = (hallsStatus: string[]) => {
  let locationStatus = "";

  if (hallsStatus?.includes("Ready")) {
    locationStatus = "Ready";
  } else if (!hallsStatus?.includes("Ready") && hallsStatus?.includes("Busy")) {
    locationStatus = "Busy";
  } else if (hallsStatus.every((status: string) => status === "Busy")) {
    locationStatus = "Busy";
  } else if (hallsStatus?.every((status: string) => status === "Unavailable")) {
    locationStatus = "Unavailable";
  }

  return locationStatus;
};

export type ColorStatusProps = {
  locationStatus: string;
  statusColorMap: Record<string, string>;
};
export const getColorStatus = ({
  locationStatus,
  statusColorMap,
}: ColorStatusProps) => {
  return statusColorMap[locationStatus as keyof typeof statusColorMap];
};

export const getHallsStatus = ({
  halls,
  statuses,
}: {
  halls: Hall[];
  statuses: Status[];
}) => {
  const hallsStatusIds = halls?.map((hall) => hall.status_id);

  return hallsStatusIds?.map((id) => {
    const statusObj = statuses?.find((status) => status.status_id === id);
    return statusObj ? statusObj.status : undefined;
  });
};

export const statusColorMap = {
  Ready: "#0ECC6D",
  Busy: "#ff6b06",
  Unavailable: "#d71515",
};
