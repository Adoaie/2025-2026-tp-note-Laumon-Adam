import { RootStackParamList } from "@/App";
import { RootState } from "@/stores/store";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";

const FavoriteButtons: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Details">>();
  const favoriteJobs = useSelector((state: RootState) => state.favourite.value);
  const styles = {
    buttonStyle: { maxWidth: 200, margin: 20 },
  };
  return (
    <Button
      mode="elevated"
      style={styles.buttonStyle}
      onPressOut={() => navigation.navigate("Favorites")}
    >
      Favoris ({favoriteJobs.length})
    </Button>
  );
};
export default FavoriteButtons;
