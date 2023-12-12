import { configureStore } from "@reduxjs/toolkit";
import targetSlice from "./targetSlice";
import currentSlice from "./currentSlice";

export const store = configureStore({
  reducer: {
    TargetStudy: targetSlice,
    CurrentStudy: currentSlice,
  },
});
