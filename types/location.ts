import { Status } from "../utils/Status";

export type location = {
  location_id: number;
  address: string;
  latitude: number;
  longitude: number;
  opening_times: string;
  closing_times: string;
  hall_id: number;
  status: Status;
  isFavourite: boolean;
};

export type Location = {
  location_id: number;
  address: string;
  latitude: number;
  longitude: number;
  opening_times: string;
  closing_times: string;
  distance: number;
  self_wash_stations: SelfWashStation[];
  washing_halls: WashingHall[];
};

type status = {
  status_id: number;
  status: string;
};

export type SelfWashStation = {
  status_id: number;
  status: status;
};

export type WashingHall = {
  hall_id: number;
  status: status;
  width: number;
  height: number;
  max_rim_size: number;
};
