import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/App";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { ViewStyle } from "react-native";
import { job } from "@/models/job";
import JobsList from "../organism/jobsList";
import SearchBar from "../atoms/searchBar";
import FavoriteButtons from "../atoms/favoritesButtons";
export const isJobsInSearch = (jobs: Array<job>, text: string) => {
  const arrayOfJobs: Array<job> = [];
  for (let element of jobs) {
    if (element.poste.includes(text)) {
      arrayOfJobs.push(element);
    }
  }
  return arrayOfJobs;
};
export type JobsSerarchProps = {
  route: {
    params: { searchText: string };
  };
};
const JobsSearch: React.FC<JobsSerarchProps> = (props) => {
  const filterText = props.route.params.searchText;
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Details">>();

  const [jobs, setJobs] = useState<Array<job>>([]);
  const [searchText, setSearchText] = useState<string>(filterText);
  const jobsInStore = useSelector((state: RootState) => state.jobs.value);
  useEffect(() => {
    setJobs(isJobsInSearch(jobsInStore, filterText));
    return () => {};
  }, []);
  const onChangeText = (text: string) => {
    setSearchText(text);
  };
  const onSubmitEditing = () => {
    navigation.navigate("Search", { searchText: searchText });
  };
  const styles: Record<string, ViewStyle> = {
    container: { flex: 1, alignItems: "center" },
  };
  return (
    <View style={styles.container}>
      <FavoriteButtons />
      <SearchBar
        setValue={onChangeText}
        value={searchText}
        onSubmitEditing={onSubmitEditing}
      ></SearchBar>
      <Text>Nombre de jobs : {jobs.length}</Text>
      <JobsList jobs={jobs}></JobsList>
    </View>
  );
};

export default JobsSearch;
