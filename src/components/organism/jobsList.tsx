import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/App";
import { job } from "@/models/job";
import AddRemoveFavorites from "../atoms/addRemoveFavorites";

type JobsListProps = {
  jobs: Array<job>;
};

const JobsList = ({ jobs }: JobsListProps) => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Details">>();

  jobs = Array.from(new Set(jobs));

  return (
    <View>
      <FlatList
        data={jobs}
        keyExtractor={(item: job) => item.id}
        renderItem={({ item }) => (
          <Card
            style={{
              margin: 10,
              borderRadius: 10,
              padding: 20,
              flexDirection: "column",
            }}
            onPress={() =>
              navigation.navigate("Details", {
                job: item,
              })
            }
          >
            <Card.Title title={item.poste} subtitle={`date : ${item.date}`} />
            <Card.Content>
              <Text style={{ fontStyle: "italic" }}>
                Entreprise : {item.entreprise}
              </Text>
              <Text>Description : {item.description}</Text>
            </Card.Content>

            <Card.Actions>
              <AddRemoveFavorites item={item}></AddRemoveFavorites>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
};

export default JobsList;
