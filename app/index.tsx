import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const iconsSize: number = 24;
  const iconsColor: string = "black";

  const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
    },
    mainContent: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      padding: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 600,
      textAlign: "center",
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      maxWidth: 500,
      height: 50,
      backgroundColor: "#ccc",
      borderRadius: 20,
      paddingHorizontal: 15,
      gap: 5,
    },
    input: {
      width: "100%",
      height: "100%",
      outlineStyle: "none" as any,
      fontSize: 20,
      paddingHorizontal: 10,
    },
    icon: {
      width: 25,
    },
    loginButton: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxWidth: 300,
      height: 50,
      padding: 15,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#aaa",
      backgroundColor: "#6e5bff",
    },
    loginButtonText: {
      fontSize: 18,
      fontWeight: 600,
      color: "white",
    },
  });

  return (
    <View style={style.container}>
      <View style={[style.mainContent, { flex: 1, backgroundColor: "#eee" }]}>
        <Text style={style.title}>ECOMMERCE PREDITIVO</Text>
        <View style={style.inputContainer}>
          <MaterialCommunityIcons
            name="email"
            size={iconsSize}
            color={iconsColor}
            style={style.icon}
          />
          <TextInput
            style={style.input}
            onChangeText={(text) => setEmail(text)}
          />
          {/* <View style={style.icon} /> */}
        </View>

        <View style={style.inputContainer}>
          <MaterialCommunityIcons
            name="lock"
            size={iconsSize}
            color={iconsColor}
            style={style.icon}
          />
          <TextInput
            style={style.input}
            secureTextEntry={showPassword ? false : true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={iconsSize}
              color={iconsColor}
              style={style.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.loginButton}>
          <Text style={style.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={[style.mainContent, { flex: 2, backgroundColor: "#ccc" }]}>
        <Text>Lado direito</Text>
      </View>
    </View>
  );
}
