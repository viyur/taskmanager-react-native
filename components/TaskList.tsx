import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import { Link } from "expo-router";

import { Task } from "../types/task";
import { Colors } from "../constants/Colors";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onToggleStatus: (task: Task) => void;
}

function TaskList({ tasks, onEdit, onDelete, onToggleStatus }: TaskListProps) {
  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      {/* Switch to toggle status of the task item */}
      <View style={styles.switchWrapper}>
        <Switch
          value={item.status === "completed"}
          style={{ transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }] }}
          onValueChange={() => {
            onToggleStatus(item);
          }}
          thumbColor={item.status === "completed" ? "green" : "gray"}
          trackColor={{ false: "#ddd", true: "#b3e5fc" }}
        />
      </View>

      {/* Description section */}
      <View style={styles.description}>
        {/* <Link href={`/task/${item.id}`} asChild> */}
        <Link
          href={{
            pathname: "/task/[id]",
            params: { id: item.id, task: JSON.stringify(item) },
          }}
          asChild
        >
          <TouchableOpacity>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskStatus}>{item.status}</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Buttons  */}
      <View style={styles.buttonSection}>
        {/* Edit button */}
        <TouchableOpacity
          onPress={() => onEdit(item)}
          style={styles.editButton}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        {/* Delete button */}
        <TouchableOpacity
          onPress={() => onDelete(item)}
          style={styles.deleteButton}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id}
    />
  );
}
export default TaskList;

const styles = StyleSheet.create({
  description: {
    flex: 0.8,
  },
  taskItem: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  taskTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  taskStatus: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  switchWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  buttonSection: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 0.2, // share the remaining space with the description
  },
  editButton: {
    width: "100%",
    padding: 5,
    backgroundColor: Colors.lightGreen,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  deleteButton: {
    width: "100%",
    padding: 5,
    backgroundColor: "#bb3e03",
    borderRadius: 4,
    marginTop: 12,
    opacity: 0.8,
  },
});
