import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import locationSlice from "./locationSlice";
import subscriptionSlice from "./subscribtionSlice";

// ...

export const store = configureStore({
  reducer: {
    location: locationSlice,
    subscriptions: subscriptionSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
