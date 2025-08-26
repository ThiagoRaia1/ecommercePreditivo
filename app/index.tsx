import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getGlobalStyles } from "../globalStyles";
import TopMenu from "./components/TopMenu";

export default function Index() {
  const globalStyles = getGlobalStyles();

  const style = StyleSheet.create({
    topBarContent: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      padding: 20,
    },
    topBarItem: {
      flex: 1, // Definir individualmente ou colocar um padrão
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ccc",
      borderRadius: 20,
    },
  });

  return (
    <View style={globalStyles.container}>
      {/* <TopMenu /> */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 70,
          top: 0,
          backgroundColor: "#ccc",
        }}
      >
        {/* left side */}
        <View
          style={[
            style.topBarContent,
            { justifyContent: "flex-start", backgroundColor: "yellow" },
          ]}
        >
          <TouchableOpacity style={style.topBarItem}>
            <Text>Logo placeholder</Text>
          </TouchableOpacity>
        </View>

        {/* right side */}
        <View
          style={[
            style.topBarContent,
            { justifyContent: "flex-end", backgroundColor: "blue" },
          ]}
        >
          <TouchableOpacity style={style.topBarItem}>
            <Text>Item 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.topBarItem}>
            <Text>Item 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.topBarItem}>
            <Text>Item 3</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>main content to be defined</Text>
      </View>
    </View>
  );
}
