import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import washSlice from "./washSlice";

// ...

export const store = configureStore({
  reducer: {
    wash: washSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
