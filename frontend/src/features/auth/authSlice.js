import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { json } from "react-router-dom";

import authService from "./authService";

// get user from localstorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  status: "idle", // idle, pending, fulfilled, rejected
  message: "",
};

// Register User
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login User
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// logout

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "pending";
      })

      .addCase(register.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })

      .addCase(register.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.payload;
        state.user = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })

      .addCase(login.pending, (state) => {
        state.status = "pending";
      })

      .addCase(login.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })

      .addCase(login.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
