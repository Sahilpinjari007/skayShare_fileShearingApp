import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addUserContact,
  getUserContact,
  searchUserContact,
} from "./contactAPI.js";

const initialState = {
  data: null,
  loading: false,
  error: null,
  success: false,
};

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await addUserContact(payload);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const getContact = createAsyncThunk(
  "contact/getContact",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getUserContact(payload);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

export const searchContact = createAsyncThunk(
  "contact/searchContact",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await searchUserContact(payload);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Something went wrong"
      );
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContact: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(getContact.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(searchContact.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.data = null;
      })
      .addCase(searchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = true;
      })
      .addCase(searchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetContact } = contactSlice.actions;
export default contactSlice.reducer;
