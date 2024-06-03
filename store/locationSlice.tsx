import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Location } from "../types/Location";
import axios from "axios";
import getUserFromSecureStorage from "../utils/getUserFromSecureStorage";

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
      const parsedUser = await getUserFromSecureStorage();
      const token = parsedUser.access_token;
      const response = await axios.get(`${baseUrl}/locations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.data;
    } catch (error: any) {
      console.log("Error message", error.message);
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
