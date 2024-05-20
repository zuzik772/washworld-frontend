import { createSlice } from "@reduxjs/toolkit";
import { Membership } from "../types/Membership";

const initialState: Membership | null = null;

export const selectedMembershipSlice = createSlice({
  name: "selectedMembership",
  initialState,
  reducers: {
    selectMembership: (state, action) => {
      console.log(action.payload);
      state = action.payload;

      return action.payload;
    },
  },
});

export const { selectMembership } = selectedMembershipSlice.actions;
export default selectedMembershipSlice.reducer;
