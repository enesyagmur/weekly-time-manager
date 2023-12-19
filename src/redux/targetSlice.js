import { createSlice } from "@reduxjs/toolkit";

export const targetSlice = createSlice({
  name: "target",
  initialState: {
    targetStudyCount: Number(localStorage.getItem("targetStudy")),
  },
  reducers: {
    updateTargetStudyCount: (state, action) => {
      const takeTarget = state.targetStudyCount;
      const totalTarget = takeTarget + action.payload;
      state.targetStudyCount = totalTarget;
    },
  },
});
export const { updateTargetStudyCount } = targetSlice.actions;
export default targetSlice.reducer;
