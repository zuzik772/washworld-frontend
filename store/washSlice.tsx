import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WashState {
  name: string;
  status: "Ready" | "Busy" | "Closed";
  openingTime: string;
  distance: number | null;
  badges: string[];
}

const initialState: WashState = {
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

export const washSlice = createSlice({
  name: "wash",
  initialState,
  reducers: {
    updateStatus: (
      state,
      action: PayloadAction<"Ready" | "Busy" | "Closed">
    ) => {
      state.status = action.payload;
    },
  },
});

export const { updateStatus } = washSlice.actions;

export default washSlice.reducer;
