import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getGlobalStyles } from "../globalStyles";
import TopMenu from "./components/TopMenu";

export default function Index() {
  const globalStyles = getGlobalStyles();

  const style = StyleSheet.create({});

  return (
    <View style={globalStyles.container}>
      <TopMenu />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>main content to be defined</Text>
      </View>
    </View>
  );
}
