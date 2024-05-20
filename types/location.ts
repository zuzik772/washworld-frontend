export interface SelfWash {
  status_id: number;
  status: Status;
}

export interface Status {
  status_id: number;
  status: "Ready" | "Busy" | "Unavailable";
}

export interface Hall {
  hall_id: number;
  status: Status;
  width: number;
  height: number;
  max_rim_size: number;
}

export interface Location {
  location_id: number;
  address: string;
  opening_times: string;
  closing_times: string;
  latitude: number;
  longitude: number;
  distance: number;
  self_wash_stations: SelfWash[];
  washing_halls: Hall[];
}
