import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import personalInfoService from "./personalInfoService";

const initialState = {
  info: {},
  status: "idle", // idle, pending, fulfilled, rejected,
  message: "",
};

// Get user info
export const getInfo = createAsyncThunk(
  "info/getInfo",
  async (token, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await personalInfoService.getInfo(token);
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

// Update User info
export const updateInfo = createAsyncThunk(
  "info/updateInfo",
  async (id, updatedInfo, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await personalInfoService.updateInfo(token, id, updatedInfo);
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

export const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    reset: (state) => (state = initialState),
    updateInfoLocal: (state, newInfo) => {
      state.info = newInfo.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.info = action.payload;
      })
      .addCase(getInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.payload;
      })
      .addCase(updateInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.info = action.payload;
      })
      .addCase(updateInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.message = `${action.payload}`;
      });
  },
});

export const { reset, updateInfoLocal } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
