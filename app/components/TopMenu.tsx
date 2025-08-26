import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function TopMenu() {
  const { width } = useWindowDimensions();

  // Define altura dinâmica
  const defineTopMenuHeight = () => {
    if (width < 768) return 56; // Mobile
    if (width < 1024) return 64; // Tablet
    return 72; // Web/Desktop
  };

  return (
    <View style={[styles.container, { height: defineTopMenuHeight() }]}>
      <Text style={styles.title}>TopMenu Responsivo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
