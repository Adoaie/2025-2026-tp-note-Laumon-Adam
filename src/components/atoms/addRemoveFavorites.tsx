import { RootStackParamList } from "@/App";
import { job } from "@/models/job";
import { pushFavorites, removeFavorite } from "@/stores/favouriteSlice";
import { RootState } from "@/stores/store";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
export type AddRemoveFavoritesProps = {
  item: job;
};
const AddRemoveFavorites: React.FC<AddRemoveFavoritesProps> = ({ item }) => {
  const favoriteJobs = useSelector((state: RootState) => state.favourite.value);
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Details">>();
  const isInFavourite = (id: string): boolean => {
    return favoriteJobs.some((movie) => movie.id === id);
  };

  return (
    <View>
      {!isInFavourite(item.id) ? (
        <Button
          onPressOut={() => {
            dispatch(pushFavorites(item));
            navigation.navigate("Favorites");
          }}
        >
          Ajouter au favoris
        </Button>
      ) : (
        <Button
          onPressOut={() => {
            dispatch(removeFavorite(item.id));
          }}
        >
          Supprimer des favoris
        </Button>
      )}
    </View>
  );
};
export default AddRemoveFavorites;
