import { Image, View, ViewStyle } from "react-native";
import { Text } from "react-native-paper";
import { job } from "@/models/job";
import { ScrollView } from "react-native-gesture-handler";

export type JobsDetailsProps = {
  route: {
    params: { job: job };
  };
};
const styles: Record<string, ViewStyle> = {
  container: { padding: 10 },
};
const JobDetails = ({ route }: JobsDetailsProps) => {
  const job = route.params.job;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              `${job.entreprisePhoto}` ||
              "https://freesvg.org/img/Image-Not-Found.png",
          }}
        />
        <Text variant="displaySmall">{job.poste}</Text>
        <Text variant="headlineSmall">{job.entreprise}</Text>
        <Text variant="headlineSmall">{job.email}</Text>
        <Text variant="bodyLarge">{job.description}</Text>
      </View>
    </ScrollView>
  );
};

export default JobDetails;
