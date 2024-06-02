import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";
import axios from "axios";
import { SignUpDto } from "../dto/signupDto";
import { SignInDto } from "../dto/signinDto";
import * as SecureStore from "expo-secure-store";
import { Location } from "../types/Location";
import getUserFromSecureStorage from "../utils/getUserFromSecureStorage";
const baseUrl = process.env.baseURL;

export interface UserState {
  user: User | null;
  favoriteLocations: Location[] | null;
  token: string | null;
  isSignedIn: boolean;
}

const initialState: UserState = {
  user: null,
  favoriteLocations: null,
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
      await SecureStore.setItemAsync("user", JSON.stringify(response.data));
      return getUserFromSecureStorage();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loadUser = createAsyncThunk("user/loadUser", async () => {
  return getUserFromSecureStorage();
});

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await SecureStore.deleteItemAsync("user");
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error);
  }
});

export const fetchAllFavoriteLocations = createAsyncThunk(
  "user/fetchAllFavoriteLocations",
  async (user_id: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `${baseUrl}/users/${user_id}/favorite_locations`
      );
      return response.data;
    } catch (error: any) {
      console.log("fetchFavouriteLocations thunk error", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addFavoriteLocation = createAsyncThunk(
  "user/addFavoriteLocation",
  async ({
    user_id,
    location_id,
  }: {
    user_id: number;
    location_id: number;
  }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/users/${user_id}/${location_id}`
      );
      return response.data;
    } catch (error: any) {
      console.log("addFavoriteLocation thunk error", error);
      return error.response.data;
    }
  }
);

export const removeFavoriteLocation = createAsyncThunk(
  "user/removeFavoriteLocation",
  async ({
    user_id,
    location_id,
  }: {
    user_id: number;
    location_id: number;
  }) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/users/${user_id}/${location_id}`
      );
      return response.data;
    } catch (error: any) {
      console.log("removeFavoriteLocation thunk error", error);
      return error.response.data;
    }
  }
);

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
        // console.log("signin action.payload", action.payload);
        state.user = action.payload.user;
        state.favoriteLocations = action.payload.favorite_locations;
        state.token = action.payload;
        state.isSignedIn = true;
      }),
      builder.addCase(signIn.rejected, (state, action) => {
        state.user = null;
        state.favoriteLocations = null;
        state.token = "";
        state.isSignedIn = false;
      }),
      builder.addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.favoriteLocations = action.payload.favorite_locations;
        state.token = action.payload;
        state.isSignedIn = true;
      }),
      builder.addCase(loadUser.rejected, (state) => {
        state.user = null;
        state.favoriteLocations = null;
        state.token = "";
        state.isSignedIn = false;
      }),
      builder.addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.favoriteLocations = null;
        state.token = "";
        state.isSignedIn = false;
      });
    builder.addCase(fetchAllFavoriteLocations.fulfilled, (state, action) => {
      state.favoriteLocations = action.payload;
    });
    builder.addCase(fetchAllFavoriteLocations.rejected, (state, action) => {
      state.favoriteLocations = null;
    });
    builder.addCase(addFavoriteLocation.fulfilled, (state, action) => {
      state.favoriteLocations = action.payload;
    });
    builder.addCase(addFavoriteLocation.rejected, (state, action) => {
      state.favoriteLocations = null;
    });
    builder.addCase(removeFavoriteLocation.fulfilled, (state, action) => {
      state.favoriteLocations = action.payload;
    });
    builder.addCase(removeFavoriteLocation.rejected, (state, action) => {
      state.favoriteLocations = null;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
