import {
  StaticParamList,
  createStaticNavigation,
} from "@react-navigation/native";

import { Provider as StoreProvider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "@/stores/store";
import Favorite from "@/components/pages/favorites";
import Jobs from "@/components/pages/jobs";
import JobDetails from "@/components/molecule/jobsDetailsOnList";
import JobsSearch from "@/components/pages/jobsSearch";
import Toast from "react-native-toast-message";
const Stack = createStackNavigator({
  screens: {
    Liste: Jobs,
    Details: JobDetails,
    Favorites: Favorite,
    Search: JobsSearch,
  },
});
const Navigation = createStaticNavigation(Stack);
export type RootStackParamList = StaticParamList<typeof Stack>;

export default function App() {
  return (
    <StoreProvider store={store}>
      <Navigation />
      <Toast />
    </StoreProvider>
  );
}
