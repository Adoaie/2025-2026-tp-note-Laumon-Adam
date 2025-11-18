import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";
import jobsReducer from "./jobsSlice";
export const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
