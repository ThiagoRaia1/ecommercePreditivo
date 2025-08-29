import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { pageNames } from "../../utils/pageNames";

export default function TopMenu() {
  const { width } = useWindowDimensions();

  // Define altura dinâmica
  const defineTopMenuHeight = () => {
    if (width < 768) return 56; // Mobile
    if (width < 1024) return 64; // Tablet
    return 120; // Web/Desktop
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: "#014D8E",
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      gap: 16,
    },
    title: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    middleContentRow: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      backgroundColor: "yellow",
      gap: 16,
    },
    adressText: {
      fontSize: 12,
    },
    rightContentRow: {
      backgroundColor: "blue",
      width: "100%",
      flex: 1,
    },
  });

  return (
    <View style={[styles.container, { height: defineTopMenuHeight() }]}>
      {/* Logo view */}
      <View
        style={{
          backgroundColor: "red",
          width: 150,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Logo</Text>
      </View>

      {/* Container das linhas do meio */}
      <View style={{ flex: 1, height: "100%", gap: 10 }}>
        {/* Linha Superior */}
        <View style={styles.middleContentRow}>
          {/* Endereço */}
          <View
            style={{
              flexDirection: "row",
              height: "100%",
              width: 150,
              backgroundColor: "#ccc",
              alignItems: "center",
              gap: 5,
            }}
          >
            <MaterialIcons name="place" size={24} color="black" />
            <View>
              <Text style={styles.adressText}>{"Enviar para\n"}</Text>
              <Link
                // alterar para navegar para a tela de login quando o usuario estiver deslogado
                // alterar para navegar para a tela de enderecos quando o usuario estiver logado
                href={pageNames.pages.mainMenu}
                style={[styles.adressText, { textDecorationLine: "underline" }]}
              >
                {"{Endereco do usuario}"}
              </Link>
            </View>
          </View>
          {/* Barra de pesquisa */}
          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              backgroundColor: "red",
            }}
          >
            <Text>Barra de pesquisa</Text>
          </View>
        </View>

        {/* Linha inferior */}
        <View style={styles.middleContentRow}>
          <TouchableOpacity
            style={{
              width: 150,
              height: "100%",
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
                gap: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  // color: "white",
                  textAlignVertical: "center",
                }}
              >
                Departamentos
              </Text>
              <Entypo
                name="chevron-down"
                size={15}
                color="black"
                style={{
                  height: "100%",
                  alignContent: "flex-end",
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Container das linhas da direita */}
      <View style={{ height: "100%", width: 400, gap: 1 }}>
        {/* Linha superior */}
        <View style={styles.rightContentRow}></View>
        {/* Linha inferior */}
        <View style={styles.rightContentRow}></View>
      </View>
    </View>
  );
}
