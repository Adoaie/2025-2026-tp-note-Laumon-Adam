import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { ScrollView, Text, View, ViewStyle } from "react-native";
import JobsList from "@/components/organism/jobsList";

const Favorite = () => {
  const favoriteJobs = useSelector((state: RootState) => state.favourite.value);
  const styles: Record<string, ViewStyle> = {
    container: { flex: 1, alignItems: "center" },
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {favoriteJobs.length == 0 ? (
          <Text>Vous n'avez aucun favoris.</Text>
        ) : (
          <JobsList jobs={favoriteJobs} />
        )}
      </View>
    </ScrollView>
  );
};
export default Favorite;
