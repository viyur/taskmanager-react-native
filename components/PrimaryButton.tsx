// a primary button component
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";

interface PrimaryButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, children }) => {
  return (
    <View>
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Text style={styles.addButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: Colors.lightRed,
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
