import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";
import axios from "axios";
import { SignUpDto } from "../dto/signupDto";
import { SignInDto } from "../dto/signinDto";

export interface UserState {
  user: User | null;
  token: string;
  isSignedIn: boolean;
}

const initialState: UserState = {
  user: null,
  token: "",
  isSignedIn: false,
};

export const signUp = createAsyncThunk(
  "user/signUp",
  async (signUpDto: SignUpDto, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://192.168.246.161:3000/auth/signup`,
        signUpDto
      );

      return response.data;
    } catch (error: any) {
      console.log("signup thunk error", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async (signInDto: SignInDto, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://192.168.246.161:3000/auth/login`,
        signInDto
      );
      return response.data;
    } catch (error: any) {
      console.log("signin thunk error", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      console.log("action.payload", action.payload);

      state.user = action.payload.user;
      state.token = action.payload.access_token;
      state.isSignedIn = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.user = null;
      state.token = "";
    }),
      builder.addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.access_token;
        state.isSignedIn = true;
      });
    builder.addCase(signIn.rejected, (state, action) => {
      state.user = null;
      state.token = "";
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
