import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import appInfoReducer from "./slices/appInfo";

export const store = configureStore({
  reducer: {
    data: appInfoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
