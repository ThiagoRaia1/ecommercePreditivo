import { TouchableOpacity, View, Text } from "react-native";
import { pageNames } from "../../utils/pageNames";
import { router } from "expo-router";
import { getGlobalStyles } from "../../globalStyles";

export default function MainMenu() {
  const globalStyles = getGlobalStyles();
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#aaa",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          router.push(pageNames.main);
        }}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
