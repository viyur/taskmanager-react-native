import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Colors } from "../constants/Colors";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <View style={styles.container}>
      {/* icon for search */}
      <Ionicons name="search" size={24} color="#6c757d" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <TextInput
          style={styles.input}
          placeholder="Search tasks..."
          placeholderTextColor="#f8f9fa"
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={onChangeText}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#dee2e6",
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#6c757d",
  },
  input: {
    marginLeft: 8,
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "black",
  },
});
