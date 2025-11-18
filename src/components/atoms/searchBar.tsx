import { TextInput, View, ViewStyle } from "react-native";

export type searchBarProps = {
  value: string;
  setValue: (text: string) => void;
  onSubmitEditing: () => void;
};
const SearchBar: React.FC<searchBarProps> = ({
  value,
  setValue,
  onSubmitEditing,
}) => {
  const styles: Record<string, ViewStyle> = {
    container: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 30,
      paddingHorizontal: 10,
    },
    textInputStyle: { width: 200, height: 30 },
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={onSubmitEditing}
      ></TextInput>
    </View>
  );
};
export default SearchBar;
