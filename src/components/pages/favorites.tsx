import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { ScrollView, View, ViewStyle } from "react-native";
import MovieList from "@/components/organism/movieList";

const Favorite = () => {
  const favouriteMovies = useSelector(
    (state: RootState) => state.favourite.value,
  );
  const styles: Record<string, ViewStyle> = {
    container: { flex: 1, alignItems: "center" },
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <MovieList movies={favouriteMovies} />
      </View>
    </ScrollView>
  );
};
export default Favorite;
