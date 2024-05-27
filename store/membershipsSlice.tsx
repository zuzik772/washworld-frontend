import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Membership } from "../types/Membership";
import axios from "axios";

export interface MembershipState {
  memberships: Membership[];
}

const initialState: MembershipState = {
  memberships: [],
};

//make a thunk that fetches the memberships from the server

export const fetchMembershipsWithFeatures = createAsyncThunk(
  "memberships/fetchMemberships",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://192.168.246.161:3000/membership-package-features"
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const membershipsSlice = createSlice({
  name: "memberships",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMembershipsWithFeatures.fulfilled, (state, action) => {
      state.memberships = action.payload;
    });
  },
});

export const {} = membershipsSlice.actions;
export default membershipsSlice.reducer;
