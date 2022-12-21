import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import visaService from "./visaService";

const initialState = {
  visa: {},
  status: "idle", // idle, pending, fulfilled, rejected,
  message: "",
};

export const getInfo = createAsyncThunk(
  "info/getVisaInfo",
  async (token, thunkAPI) => {
    try {
      //   const token = thunkAPI.getState().auth.user.token;
      return await visaService.getInfo(token);
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

export const updatedInfo = createAsyncThunk(
  "info/updateVisaInfo",
  async (id, updatedInfo, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await visaService.updateInfo(token, id, updatedInfo);
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

export const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducer: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.visa = action.payload;
      })
      .addCase(getInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.payload;
      });
  },
});

export const { reset } = visaSlice.actions;
export default visaSlice.reducer;
