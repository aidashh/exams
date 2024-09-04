import { configureStore } from "@reduxjs/toolkit";
import { shopReducers } from "./sclice/shopSlice";

export const store = configureStore({
  reducer: {
    store: shopReducers,
  },
});
