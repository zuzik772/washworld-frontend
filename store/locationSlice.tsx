import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../types/Location";

export interface LocationState {
  locations: Location[];
}

const initialState: LocationState = {
  locations: [
    {
      location_id: 1,
      address: "123 Hovedgade, Springfield",
      opening_times: "08:00",
      closing_times: "20:00",
      latitude: 37.7749,
      longitude: -122.4194,
      distance: 5.2,
      self_wash_stations: [
        {
          status_id: 1,
          status: {
            status_id: 1,
            status: "Unavailable",
          },
        },
        {
          status_id: 2,
          status: {
            status_id: 2,
            status: "Unavailable",
          },
        },
      ],
      washing_halls: [
        {
          hall_id: 1,
          status: {
            status_id: 1,
            status: "Unavailable",
          },
        },
        {
          hall_id: 2,
          status: {
            status_id: 3,
            status: "Ready",
          },
        },
      ],
    },
    {
      location_id: 2,
      address: "456 Elmegade, Shelbyville",
      opening_times: "09:00",
      closing_times: "22:00",
      latitude: 34.0522,
      longitude: -118.2437,
      distance: 10.4,
      self_wash_stations: [
        {
          status_id: 3,
          status: {
            status_id: 1,
            status: "Ready",
          },
        },
        {
          status_id: 4,
          status: {
            status_id: 2,
            status: "Busy",
          },
        },
      ],
      washing_halls: [
        {
          hall_id: 3,
          status: {
            status_id: 2,
            status: "Busy",
          },
        },
        {
          hall_id: 4,
          status: {
            status_id: 3,
            status: "Unavailable",
          },
        },
      ],
    },
  ],
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
});

export const {} = locationSlice.actions;

export default locationSlice.reducer;
