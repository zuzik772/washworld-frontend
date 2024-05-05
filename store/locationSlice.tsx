import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LocationState {
  name: string;
  status: "Ready" | "Busy" | "Unavailable";
  openingTime: string;
  distance: number | null;
  badges: string[];
}

const initialState: LocationState = {
  name: "Søborg - Dynamovej",
  status: "Ready",
  openingTime: "7-22",
  distance: 1.6,
  badges: [
    "5 washing halls",
    "Environmentally friendly",
    "3 self wash stations",
    "Easy and fast payment",
  ],
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateStatus: (
      state,
      action: PayloadAction<"Ready" | "Busy" | "Unavailable">
    ) => {
      state.status = action.payload;
    },
  },
});

export const { updateStatus } = locationSlice.actions;

export default locationSlice.reducer;
