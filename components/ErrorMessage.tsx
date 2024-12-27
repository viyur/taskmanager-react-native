import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ErrorMessageProps {
  message: string; // The error message to display
  visible: boolean; // Whether the message should be shown
}

export default function ErrorMessage({ message, visible }: ErrorMessageProps) {
  if (!visible || !message) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 8,
    backgroundColor: "#ffe6e6", // Light red background
    borderRadius: 4,
  },
  errorText: {
    color: "#ff4d4d", // Bright red text
    fontSize: 14,
    fontWeight: "bold",
  },
});
