import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "modules/home/interface/stores/login.slice";

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    login: loginSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
