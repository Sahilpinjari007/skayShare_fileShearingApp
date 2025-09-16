import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import accountReducer from "../features/account/accountSlice.js";
import transferReducer from "../features/transfer/transferSlice.js";
import contactReducer from "../features/contact/contactSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    transfer: transferReducer,
    contact: contactReducer,
  },
});
