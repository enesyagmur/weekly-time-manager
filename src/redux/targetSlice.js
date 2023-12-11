import { createSlice } from "@reduxjs/toolkit";

export const targetSlice = createSlice({
  name: "target",
  initialState: {
    targetStudyCount: localStorage.getItem("targetStudy"),
  },
  reducers: {
    updateTargetStudyCount: (state) => {
      const target = localStorage.getItem("targetStudy");
      state.targetStudyCount = target;
    },
  },
});
export const { updateTargetStudyCount } = targetSlice.actions;
export default targetSlice.reducer;
