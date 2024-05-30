import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";
import axios from "axios";
import { SignUpDto } from "../dto/signupDto";
import { SignInDto } from "../dto/signinDto";
import * as SecureStore from "expo-secure-store";

const baseUrl = process.env.baseURL;

export interface UserState {
  user: User | null;
  token: string | null;
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
    console.log("SignUpDto thunk", signUpDto);
    try {
      const response = await axios.post(`${baseUrl}/auth/signup`, signUpDto);

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
      const response = await axios.post(`${baseUrl}/auth/login`, signInDto);
      // console.log("sign in response", response.data);
      await SecureStore.setItemAsync(
        "userToken",
        JSON.stringify(response.data.access_token)
      );
      // const tokenCheck = await SecureStore.getItemAsync("userToken");
      // console.log("tokenCheck", tokenCheck);
      return response.data;
    } catch (error: any) {
      console.log("signin thunk error message", error.message);
      console.log("signin thunk error res data", error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loadToken = createAsyncThunk("user/loadToken", async () => {
  const token = await SecureStore.getItemAsync("userToken");
  return token;
});

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await SecureStore.deleteItemAsync("userToken");
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      console.log("signup action.payload", action.payload);
      state.user = action.payload.user;
      state.token = action.payload.access_token;
      state.isSignedIn = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      console.log("signup failed", action.payload);
      state.user = null;
      state.token = "";
    }),
      builder.addCase(signIn.fulfilled, (state, action) => {
        console.log("signin action.payload", action.payload);
        state.user = action.payload.user;
        state.token = action.payload.access_token;
        state.isSignedIn = true;
      }),
      builder.addCase(signIn.rejected, (state, action) => {
        state.user = null;
        state.token = "";
      }),
      builder.addCase(loadToken.fulfilled, (state, action) => {
        state.token = action.payload;
        console.log("loadToken action.payload", action.payload);
      }),
      builder.addCase(loadToken.rejected, (state) => {
        state.token = "";
      }),
      builder.addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.isSignedIn = false;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
