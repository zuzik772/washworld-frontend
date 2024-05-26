import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../types/Location";
import axios from "axios";

export interface LocationState {
  locations: Location[];
}

const initialState: LocationState = {
  locations: [],
};

export const fetchAllLocations = createAsyncThunk(
  "locations/fetchAllLocations",
  async (thunkAPI) => {
    try {
      const response = await axios.get("http://192.168.246.161:3000/locations");
      return await response.data;
    } catch (error) {
      console.log("Error in fetchlocation thunk", error);
      return;
    }
  }
);

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllLocations.fulfilled, (state, action) => {
      state.locations = action.payload;
    });
  },
});

export const {} = locationSlice.actions;

export default locationSlice.reducer;
