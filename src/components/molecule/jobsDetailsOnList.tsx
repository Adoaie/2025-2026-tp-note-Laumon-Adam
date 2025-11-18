import { Image, View, ViewStyle } from "react-native";
import { Text } from "react-native-paper";
import { job } from "@/models/job";
import { ScrollView } from "react-native-gesture-handler";
import AddRemoveFavorites from "../atoms/addRemoveFavorites";

export type JobsDetailsProps = {
  route: {
    params: { job: job };
  };
};
const styles: Record<string, ViewStyle> = {
  container: { padding: 10, gap: 10 },
};
const JobDetails = ({ route }: JobsDetailsProps) => {
  const job = route.params.job;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant="displaySmall">Poste : {job.poste}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={{
              uri:
                `${job.entreprisePhoto}` ||
                "https://freesvg.org/img/Image-Not-Found.png",
            }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              borderColor: "purple",
              borderWidth: 3,
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text variant="headlineSmall">Entreprise : {job.entreprise}</Text>
            <Text>Ville :{job.ville}</Text>
            <Text>
              Adresse :{job.numeroRue} {job.rue} {job.codePostal}
            </Text>
          </View>
        </View>
        <View>
          <Text variant="headlineSmall">Informations:</Text>
          <Text variant="bodySmall">Email RH : {job.email}</Text>
          <Text variant="bodySmall">Salaire annuel : {job.salaireAnnuel}€</Text>
          <Text variant="bodySmall">Téléphone RH : {job.telephone}</Text>
          <Text variant="bodySmall">Date : {job.date}</Text>
        </View>

        <Text variant="bodyLarge">Description : </Text>
        <Text variant="bodySmall">{job.description}</Text>
        <AddRemoveFavorites item={job} />
      </View>
    </ScrollView>
  );
};

export default JobDetails;
