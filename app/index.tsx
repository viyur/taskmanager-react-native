import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

import { Task } from "../types/task";
import { mockTasks } from "../constants/Data";
import { AddTaskModal } from "../components/AddTaskModal";
import { EditTaskModal } from "../components/EditTaskModal";
import { Colors } from "../constants/Colors";
import TaskList from "../components/TaskList";
import PrimaryButton from "../components/PrimaryButton";
import SearchBar from "../components/SearchBar";
import ErrorMessage from "../components/ErrorMessage";

// Mock data
const initialTasks: Task[] = [...mockTasks]; // data from mock data file
let tasksData: Task[] = [...mockTasks]; // dynamically update tasks data

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>(tasksData);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editTask, setEditTask] = useState<Task | null>(null);

  /**
   * Adds a new task to the tasks state.
   * @param {Omit<Task, "id">} newTask - New task to add. The id is generated.
   */
  const handleAddTask = (newTask: Omit<Task, "id">) => {
    const task: Task = {
      ...newTask,
      id: Date.now().toString(), // Simple way to generate unique IDs
    };
    tasksData = [...tasksData, task]; // update the tasks data
    setTasks((currentTasks) => [...currentTasks, task]); // update the tasks state
  };

  /**
   * Handles updating a task in the tasks state.
   * @param {Task} updatedTask The updated task to save.
   */
  const handleEditTask = (updatedTask: Task) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  /**
   * Handles deleting a task from the tasks state.
   * @param {Task} task The task to delete.
   */
  const handleDeleteTask = (task: Task) => {
    tasksData = tasksData.filter((t) => t.id !== task.id);
    setTasks((currentTasks) => currentTasks.filter((t) => t.id !== task.id));
  };

  /**
   * Toggles the status of a task from "pending" to "completed" or vice versa.
   * @param {Task} task The task to toggle the status for.
   */
  const toggleTaskStatus = (task: Task) => {
    tasksData = tasksData.map((t) =>
      t.id === task.id
        ? { ...t, status: t.status === "pending" ? "completed" : "pending" }
        : t
    );
    setTasks((currentTasks) =>
      currentTasks.map((t) =>
        t.id === task.id
          ? {
              ...t,
              status: t.status === "pending" ? "completed" : "pending",
            }
          : t
      )
    );
  };

  const handleSearchBarChange = (text: string) => {
    if (text === "") {
      setError(null);
      setTasks(tasksData);
      setSearchText("");
    } else {
      const filteredTasks = tasksData.filter((task) =>
        task.title.toLowerCase().includes(text.toLowerCase())
      );
      if (filteredTasks.length === 0) {
        setError("No tasks found");
      } else {
        setError(null);
      }
      setSearchText(text);
      setTasks(filteredTasks);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchText} onChangeText={handleSearchBarChange} />
      <PrimaryButton onPress={() => setIsAddModalVisible(true)}>
        Add New Task
      </PrimaryButton>

      {/* conditionally render the search bar error message  */}
      <ErrorMessage message={error ? error : ""} visible={error !== null} />
      {/* Task List section */}
      <TaskList
        tasks={tasks}
        onEdit={(task: Task) => {
          setIsEditModalVisible(true);
          setEditTask(task);
        }} // setEditTask to give information to the Edit Modal
        onDelete={handleDeleteTask} // Pass the handleDeleteTask function
        onToggleStatus={toggleTaskStatus}
      />

      {/* Modals section */}
      <AddTaskModal
        visible={isAddModalVisible}
        onClose={() => setIsAddModalVisible(false)}
        onAdd={handleAddTask}
      />

      <EditTaskModal
        visible={isEditModalVisible}
        task={editTask}
        onClose={() => {
          setIsEditModalVisible(false);
          setEditTask(null);
        }} // Close modal
        onSave={handleEditTask} // Update task
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.lightPink,
  },
});
