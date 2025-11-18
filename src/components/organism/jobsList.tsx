import { View, Text, FlatList, ViewStyle } from "react-native";
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
  const styles: Record<string, ViewStyle> = {
    card: {
      margin: 10,
      borderRadius: 10,
      padding: 20,
      flexDirection: "column",
    },
    contentContainer: { width: "100%" },
  };
  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={jobs}
        keyExtractor={(item: job) => item.id}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() =>
              navigation.navigate("Details", {
                job: item,
              })
            }
          >
            <Card.Title
              title={item.poste}
              subtitle={`Date de l'annonce : ${item.date}`}
            />
            <Card.Content>
              <Text style={{ fontStyle: "italic" }}>
                Entreprise : {item.entreprise} - {item.email}
              </Text>
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
