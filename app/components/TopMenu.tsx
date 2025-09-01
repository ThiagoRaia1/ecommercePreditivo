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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
      gap: 16,
      height: "100%",
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
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    middleContentRowButton: {
      paddingHorizontal: 10,
      height: "75%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      // borderWidth: 1,
      borderColor: "#003A6A",
    },
    middleContentRowButtonText: {
      fontSize: 13,
      fontWeight: 500,
      color: textIconMainColor,
    },
    linkText: {
      textDecorationLine: "underline", // sublinhado
      color: textIconMainColor, // cor azul padrão para link
      fontSize: 14,
      fontWeight: 700,
    },
    normalText: {
      fontSize: 14,
      color: textIconMainColor,
      fontWeight: 500,
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
          />
          <View style={{ width: 400, flexDirection: "row" }}>
            <View style={styles.middleContentRow}>
              <FontAwesome5
                name="user-circle"
                size={25}
                color={textIconMainColor}
                style={{ alignSelf: "center" }}
              />
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <Link href={pageNames.auth.login} style={styles.linkText}>
                    Entre
                  </Link>
                  <Text style={styles.normalText}> ou</Text>
                </View>
                <Link href={pageNames.auth.register} style={styles.linkText}>
                  Cadastre-se
                </Link>
              </View>
            </View>
            <View style={styles.middleContentRow}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <TouchableOpacity>
                  <MaterialIcons
                    name="support-agent"
                    size={24}
                    color={textIconMainColor}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <MaterialIcons
                    name="settings-accessibility"
                    size={24}
                    color={textIconMainColor}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="cards-heart"
                    size={24}
                    color={textIconMainColor}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <MaterialIcons
                    name="shopping-cart"
                    size={24}
                    color={textIconMainColor}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Linha inferior */}
        <View style={styles.middleContentRow}>
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
              <Text style={styles.middleContentRowButtonText}>
                Computadores
              </Text>
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
          <View
            style={{
              backgroundColor: "red",
              width: 400,
              height: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text>Anúncio placeholder</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
