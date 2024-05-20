import { Status } from "../utils/Status";

export type location = {
  location_id: number;
  address: string;
  latitude: number;
  longitude: number;
  opening_times: string;
  closing_time: string;
  hall_id: number;
  status: Status;
  isFavourite: boolean;
};
