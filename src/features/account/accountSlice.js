import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteUserAccount,
  deleteUserAvatar,
  resetUserPassword,
  updateUserName,
  uploadUserAvatar,
} from "./accountAPI.js";

const initialState = {
  data: null,
  loading: false,
  error: null,
  success: false,
};

export const uploadAvatar = createAsyncThunk(
  "account/uploadAvatar",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await uploadUserAvatar(userData);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const deleteAvatar = createAsyncThunk(
  "account/deleteAvatar",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await deleteUserAvatar(userData);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const updateName = createAsyncThunk(
  "account/updateName",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await updateUserName(userData);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "account/resetPassword",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await resetUserPassword(userData);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "account/deleteAccount",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await deleteUserAccount(userData);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    resetAccount: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadAvatar.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(deleteAvatar.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(deleteAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(deleteAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(updateName.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(updateName.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(updateName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(deleteAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetAccount } = accountSlice.actions;
export default accountSlice.reducer;
