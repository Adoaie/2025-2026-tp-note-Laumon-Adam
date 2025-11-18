import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { job } from "@/models/job";
import Toast from "react-native-toast-message";
interface FavouriteState {
  value: Array<job>;
}

const initialState: FavouriteState = {
  value: [],
};

export const favouriteSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    pushFavorites: (state, job: PayloadAction<job>) => {
      Toast.show({
        type: "success",
        text1: `Job ${job.payload.poste} ajouté aux favoris !`,
      });
      state.value.push(job.payload);
    },
    removeFavorite: (state, id: PayloadAction<string>) => {
      Toast.show({
        type: "success",
        text1: "Job retiré des favoris.",
      });
      state.value = state.value.filter((m) => m.id != id.payload);
    },
  },
});

export const { pushFavorites, removeFavorite } = favouriteSlice.actions;
export default favouriteSlice.reducer;

export const selectIsInFavourite = (
  state: { favourite: FavouriteState },
  id: string,
) => {
  return state.favourite.value.some((job) => job.id === id);
};
