import { createSlice } from "@reduxjs/toolkit";

export const currentSlice = createSlice({
  name: "current",
  initialState: {
    currentStudyCount: Number(localStorage.getItem("currentStudy")),
  },
  reducers: {
    updateCurrentStudyCount: (state, action) => {
      const takeCurrent = state.currentStudyCount;
      const totalCurrent = takeCurrent + action.payload;
      state.currentStudyCount = totalCurrent;
    },
  },
});
export const { updateCurrentStudyCount } = currentSlice.actions;
export default currentSlice.reducer;
