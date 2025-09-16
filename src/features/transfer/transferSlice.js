import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserTransfer,
  deleteUserTransferById,
  getUserRecivedTransfers,
  getUserSentTransfers,
  getUserTransferById,
  searchUserTransfer,
  updateUserTransferPassword,
  validateUserTransferPassword,
} from "./transferAPI.js";

const initialState = {
  data: null,
  loading: false,
  error: null,
  success: false,
  progress: { percent: 0, loaded: 0, total: 0 },
};

let abortController = null;

export const createTransfer = createAsyncThunk(
  "transfer/createTransfer",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      abortController = new AbortController();
      const data = await createUserTransfer(
        payload,
        ({ percent, loaded, total }) => {
          dispatch(setProgress({ percent, loaded, total }));
        },
        abortController.signal
      );

      return data;
    } catch (err) {
      if (err.name === "CanceledError" || err.name === "AbortError") {
        return rejectWithValue("Upload canceled");
      }
      return rejectWithValue(
        err.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const getSentTransfers = createAsyncThunk(
  "transfer/getSentTransfers",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getUserSentTransfers();
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const getRecivedTransfers = createAsyncThunk(
  "transfer/getRecivedTransfers",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getUserRecivedTransfers();
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const searchTransfers = createAsyncThunk(
  "transfer/searchTransfers",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await searchUserTransfer(payload);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const getTransferById = createAsyncThunk(
  "transfer/getTransferById",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getUserTransferById(payload);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const deleteTransfer = createAsyncThunk(
  "transfer/deleteTransfers",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await deleteUserTransferById(payload);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const updateTransferPassowrd = createAsyncThunk(
  "transfer/updateTransferPassowrd",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await updateUserTransferPassword(payload);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const validateTransferPassowrd = createAsyncThunk(
  "transfer/validateTransferPassowrd",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await validateUserTransferPassword(payload);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

const transferSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    resetTransfer: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    },

    setProgress: (state, action) => {
      state.progress = action.payload;
    },

    resetProgress: (state) => {
      state.progress = { percent: 0, loaded: 0, total: 0 };
    },

    cancelTransfer: (state) => {
      if (abortController) {
        abortController.abort();
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTransfer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.progress = { percent: 0, loaded: 0, total: 0 };
      })
      .addCase(createTransfer.fulfilled, (state, action) => {
        const files = action.meta.arg.files || [];
        const total = files.reduce((acc, f) => acc + f.size, 0);

        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
        state.progress = {
          percent: 100,
          loaded: total,
          total: total,
        };
      })
      .addCase(createTransfer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.progress = { percent: 0, loaded: 0, total: 0 };
      });

    builder
      .addCase(getSentTransfers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(getSentTransfers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(getSentTransfers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(getRecivedTransfers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(getRecivedTransfers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(getRecivedTransfers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(searchTransfers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(searchTransfers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(searchTransfers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(getTransferById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(getTransferById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(getTransferById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(deleteTransfer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(deleteTransfer.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(deleteTransfer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(updateTransferPassowrd.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(updateTransferPassowrd.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(updateTransferPassowrd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(validateTransferPassowrd.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(validateTransferPassowrd.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(validateTransferPassowrd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetTransfer, setProgress, resetProgress, cancelTransfer } =
  transferSlice.actions;
export default transferSlice.reducer;
