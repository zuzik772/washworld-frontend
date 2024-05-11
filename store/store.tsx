import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import locationSlice from "./locationSlice";
import packageSlice from "./packageSlice";

// ...

export const store = configureStore({
  reducer: {
    location: locationSlice,
    packages: packageSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
