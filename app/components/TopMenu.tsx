import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { pageNames } from "../../utils/pageNames";

export default function TopMenu() {
  const { width } = useWindowDimensions();
  const textIconMainColor = "white";

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
      gap: 16,
    },
    adressView: {
      flexDirection: "row",
      height: "100%",
      width: 150,
      alignItems: "center",
      gap: 5,
      overflow: "hidden",
    },
    adressText: {
      fontSize: 12,
      fontWeight: 700,
      color: textIconMainColor,
    },
    rightContentRow: {
      backgroundColor: "blue",
      width: "100%",
      flex: 1,
    },
    middleContentRowButton: {
      paddingHorizontal: 10,
      height: "75%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#003A6A",
    },
    middleContentRowButtonText: {
      fontSize: 13,
      fontWeight: 500,
      color: textIconMainColor,
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
        <Text style={{ textAlign: "center" }}>{"Logo\nPlaceholder"}</Text>
      </View>

      {/* Container das linhas do meio */}
      <View
        style={{
          flex: 1,
          height: "100%",
          gap: 10,
          alignContent: "space-evenly",
        }}
      >
        {/* Linha Superior */}
        <View style={styles.middleContentRow}>
          {/* Endereço */}
          <View style={styles.adressView}>
            <MaterialIcons
              name="place"
              size={24}
              color={textIconMainColor}
              style={{ marginLeft: -5 }}
            />
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
          <TextInput
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              borderRadius: 5,
              backgroundColor: "#fff",
              paddingHorizontal: 10,
            }}
          ></TextInput>
        </View>

        {/* Linha inferior */}
        <View style={[styles.middleContentRow, { alignItems: "flex-end" }]}>
          {/* Departamentos */}
          <TouchableOpacity
            style={[
              styles.middleContentRowButton,
              { width: 150, borderWidth: 1, borderColor: textIconMainColor },
            ]}
          >
            {/* View para juntar o texto com o ícone de dropdown */}
            <View
              style={{
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text
                style={[
                  styles.middleContentRowButtonText,
                  {
                    fontSize: 13,
                    fontWeight: 700,
                  },
                ]}
              >
                Departamentos
              </Text>
              <Entypo
                name="chevron-down"
                size={15}
                color={textIconMainColor}
                style={{
                  height: "100%",
                  alignContent: "flex-end",
                }}
              />
            </View>
          </TouchableOpacity>

          {/* Cupons */}
          <TouchableOpacity
            style={[
              styles.middleContentRowButton,
              {
                backgroundColor: "#FF6500",
                borderWidth: 0,
                paddingHorizontal: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.middleContentRowButtonText,
                {
                  fontSize: 13,
                  fontWeight: 700,
                },
              ]}
            >
              Cupons
            </Text>
          </TouchableOpacity>

          {/* Mais vendidos */}
          <TouchableOpacity
            style={[
              styles.middleContentRowButton,
              {
                backgroundColor: "#003A6A",
                borderWidth: 0,
                paddingHorizontal: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.middleContentRowButtonText,
                {
                  fontSize: 13,
                  fontWeight: 700,
                },
              ]}
            >
              Mais vendidos
            </Text>
          </TouchableOpacity>

          {/* Venda no KaBum! */}
          <TouchableOpacity style={styles.middleContentRowButton}>
            <Text style={styles.middleContentRowButtonText}>
              Venda no KaBum!
            </Text>
          </TouchableOpacity>

          {/* Hardware */}
          <TouchableOpacity style={styles.middleContentRowButton}>
            <Text style={styles.middleContentRowButtonText}>Hardware</Text>
          </TouchableOpacity>

          {/* PC Gamer */}
          <TouchableOpacity style={styles.middleContentRowButton}>
            <Text style={styles.middleContentRowButtonText}>PC Gamer</Text>
          </TouchableOpacity>

          {/* Computadores */}
          <TouchableOpacity style={styles.middleContentRowButton}>
            <Text style={styles.middleContentRowButtonText}>Computadores</Text>
          </TouchableOpacity>

          {/* Periféricos */}
          <TouchableOpacity style={styles.middleContentRowButton}>
            <Text style={styles.middleContentRowButtonText}>Periféricos</Text>
          </TouchableOpacity>

          {/* Escritório */}
          <TouchableOpacity style={styles.middleContentRowButton}>
            <Text style={styles.middleContentRowButtonText}>Escritório</Text>
          </TouchableOpacity>

          {/* Blog KaBum! */}
          <TouchableOpacity style={styles.middleContentRowButton}>
            <Text style={styles.middleContentRowButtonText}>Blog KaBum!</Text>
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
