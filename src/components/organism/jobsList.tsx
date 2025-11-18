import { View, Text } from "react-native";
import { Button, Card } from "react-native-paper";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/App";
import { RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { push, remove } from "@/stores/favouriteSlice";
import { job } from "@/models/job";

type JobsListProps = {
  jobs: Array<job>;
};

const JobsList = ({ jobs }: JobsListProps) => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Details">>();

  const favouriteMovies = useSelector(
    (state: RootState) => state.favourite.value,
  );

  const isInFavourite = (id: string): boolean => {
    return favouriteMovies.some((movie) => movie.id === id);
  };

  const dispatch = useDispatch();

  jobs = Array.from(new Set(jobs));

  return (
    <View>
      {jobs.map((job) => {
        return (
          <Card
            key={job.poste + job.id}
            style={{
              margin: 10,
              borderRadius: 10,
              padding: 20,
              flexDirection: "column",
            }}
            onPress={() =>
              navigation.navigate("Details", {
                job: job,
              })
            }
          >
            <Card.Title title={job.poste} subtitle={job.date} />
            <Card.Cover
              source={{
                uri:
                  `${job.entreprisePhoto}` ||
                  "https://freesvg.org/img/Image-Not-Found.png",
              }}
            />
            <Card.Content>
              <Text style={{ fontStyle: "italic" }}>{job.entreprise}</Text>
              <Text>{job.description}</Text>
            </Card.Content>

            <Card.Actions>
              {!isInFavourite(job.id) ? (
                <Button onPressOut={() => dispatch(push(job))}>
                  Ajouter au favoris
                </Button>
              ) : (
                <Button onPressOut={() => dispatch(remove(job.id))}>
                  Supprimer des favoris
                </Button>
              )}
            </Card.Actions>
          </Card>
        );
      })}
    </View>
  );
};

export default JobsList;
