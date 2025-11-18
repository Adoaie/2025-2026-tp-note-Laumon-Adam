import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { job } from "@/models/job";

interface JobsSlate {
  value: Array<job>;
}

const initialState: JobsSlate = {
  value: [],
};

export const jobsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    push: (state, job: PayloadAction<Array<job>>) => {
      state.value = [...state.value, ...job.payload];
    },
    remove: (state, id: PayloadAction<string>) => {
      state.value = state.value.filter((m) => m.id != id.payload);
    },
  },
});

export const { push, remove } = jobsSlice.actions;
export default jobsSlice.reducer;
