import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { Text, View, ViewStyle } from "react-native";
import JobsList from "@/components/organism/jobsList";
import FavoriteButtons from "../atoms/favoritesButtons";

const Favorite = () => {
  const favoriteJobs = useSelector((state: RootState) => state.favourite.value);
  const styles: Record<string, ViewStyle> = {
    container: { flex: 1, alignItems: "center", paddingBottom: 60 },
  };
  return (
    <View style={styles.container}>
      <FavoriteButtons />
      {favoriteJobs.length == 0 ? (
        <Text>Vous n'avez aucun favoris.</Text>
      ) : (
        <JobsList jobs={favoriteJobs} />
      )}
    </View>
  );
};
export default Favorite;
