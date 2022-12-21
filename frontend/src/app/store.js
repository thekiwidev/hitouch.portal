import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import personalInfoReducer from "../features/personalInfo/personalInfoSlice";
import visaReducer from "../features/visa/visaSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    personalInfo: personalInfoReducer,
    visa: visaReducer,
  },
});
