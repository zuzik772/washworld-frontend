import { Status } from "../utils/Status";

export type location = {
  location_id: number;
  address: string;
  latitude: number;
  longitude: number;
  opening_times: number;
  closing_time: number;
  hall_id: number[];
};
