import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Colors } from "../constants/Colors";
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Task Manager", // This sets the main screen title
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: Colors.lightPink },
          }}
        />
        <Stack.Screen
          name="task/[id]"
          options={{
            title: "Task Details", // This sets the title for task details screen
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: Colors.lightPink },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
