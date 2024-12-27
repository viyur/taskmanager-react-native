import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

import { Colors } from "../../constants/Colors";

export default function TaskScreen() {
  const { task } = useLocalSearchParams();

  // Parse the task object from the parameters
  const parsedTask = task ? JSON.parse(task as string) : null;

  if (!parsedTask) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Task not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Status Badge */}
        <View style={styles.statusBadge}>
          <Icon
            name={
              parsedTask.status === "completed"
                ? "checkmark-circle"
                : "time-outline"
            }
            size={20}
            color={parsedTask.status === "completed" ? "#4CAF50" : "#FF9800"}
          />
          <Text
            style={[
              styles.statusText,
              parsedTask.status === "completed" && styles.completedStatusText,
            ]}
          >
            {parsedTask.status === "completed" ? "Completed" : "Pending"}
          </Text>
        </View>

        {/* Task Title */}
        <Text style={styles.title}>{parsedTask.title}</Text>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.label}>Description</Text>
          {parsedTask.description && (
            <Text style={styles.description}>{parsedTask.description}</Text>
          )}
          {!parsedTask.description && (
            <Text style={styles.description}>No description provided</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.lightPink,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#f8edeb",

    borderRadius: 16,
    padding: 24,
    shadowColor: "#a4ac86",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: "90%",
    alignItems: "center",
    borderWidth: 1,
    // borderColor: "#ddd",
    borderColor: "#b6ad90",
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee2df",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  statusText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#FF9800",
  },
  completedStatusText: {
    color: "#4CAF50",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  descriptionContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#333",
    textAlign: "center",
  },

  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
