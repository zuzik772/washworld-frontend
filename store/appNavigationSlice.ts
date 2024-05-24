import { createSlice } from "@reduxjs/toolkit";
// import { Location } from "../types/Location";

export interface AppNavigationState {
  appNavigation: string;
}

const initialState: AppNavigationState = {
  appNavigation: "",
};

export const appNavigationSlice = createSlice({
  name: "appNavigation",
  initialState,
  reducers: {
    appNavigation: (state, action) => {
      state = action.payload;

      return action.payload;
    },
  },
});

export const { appNavigation } = appNavigationSlice.actions;

export default appNavigationSlice.reducer;
