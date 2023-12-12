import { createSlice } from "@reduxjs/toolkit";

export const currentSlice = createSlice({
  name: "current",
  initialState: {
    currentStudyCount: localStorage.getItem("currentStudy"),
  },
  reducers: {
    updateCurrentStudyCount: (state) => {
      const current = localStorage.getItem("currentStudy");
      state.currentStudyCount = current;
    },
  },
});
export const { updateCurrentStudyCount } = currentSlice.actions;
export default currentSlice.reducer;
