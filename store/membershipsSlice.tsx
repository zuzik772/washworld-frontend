import { createSlice } from "@reduxjs/toolkit";
import { Membership } from "../types/Membership";

export interface MembershipState {
  memberships: Membership[];
}

const initialState: MembershipState = {
  memberships: [],
};

//make a thunk that fetches the memberships from the server

export const membershipsSlice = createSlice({
  name: "memberships",
  initialState,
  reducers: {},
});

export const {} = membershipsSlice.actions;
export default membershipsSlice.reducer;
