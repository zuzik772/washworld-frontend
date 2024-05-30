import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Location } from "../types/Location";
import axios from "axios";

export interface LocationState {
  locations: Location[];
}

const initialState: LocationState = {
  locations: [],
};
const baseUrl = process.env.baseURL;

export const fetchAllLocations = createAsyncThunk(
  "locations/fetchAllLocations",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/locations`);
      return await response.data;
    } catch (error: any) {
      console.log("Error message", error.message);
      console.log("Error response", error.response);
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
    builder.addCase(fetchAllLocations.rejected, (state, action) => {
      state.locations = [];
      console.log("Error in fetchlocation thunk", action.error);
    });
  },
});

export const {} = locationSlice.actions;

export default locationSlice.reducer;
