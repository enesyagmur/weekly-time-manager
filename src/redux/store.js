import { configureStore } from "@reduxjs/toolkit";
import targetSlice from "./targetSlice";

export const store = configureStore({
  reducer: {
    TargetStudy: targetSlice,
  },
});
