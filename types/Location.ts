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
  status_id: number;
}

export interface Location {
  location_id: number;
  address: string;
  opening_times: number;
  closing_times: number;
  latitude: number;
  longitude: number;
}
