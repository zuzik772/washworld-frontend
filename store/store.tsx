import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import locationSlice from "./locationSlice";
import membershipsSlice from "./membershipsSlice";
import userSlice from "./userSlice";
import selectedMembershipSlice from "./selectedMembershipSlice";

// ...

export const store = configureStore({
  reducer: {
    location: locationSlice,
    memberships: membershipsSlice,
    user: userSlice,
    selectedMembership: selectedMembershipSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
