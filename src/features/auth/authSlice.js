import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { autoLoginUser, logOutUser } from "./authAPI.js";

const initialState = {
  data: null,
  loading: false,
  error: null,
  success: false,
};

export const autoLogin = createAsyncThunk(
  "auth/autoLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await autoLoginUser(userData);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await logOutUser(userData);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(autoLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(autoLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(autoLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
