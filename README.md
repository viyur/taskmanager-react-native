# Task Manager App

Task Manager is a React Native application built with Expo, designed for managing tasks efficiently. It supports features like adding, editing, deleting tasks, toggling task status, and searching tasks. The app also includes a detailed task view.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Toggle task status (Pending/Completed)
- Search tasks by title
- View task details
- Error handling for invalid inputs
- Customizable UI with a light and colorful theme

## Technologies Used

- **React Native**
- **Expo Router** for navigation
- **TypeScript** for type safety
- **React Native Vector Icons** for icons
- **react-native-safe-area-context** for layout management

## Folder Structure

```
.
├── app
│   ├── _layout.tsx
│   ├── index.tsx
│   └── task/[id].tsx
├── components
│   ├── AddTaskModal.tsx
│   ├── EditTaskModal.tsx
│   ├── TaskList.tsx
│   ├── PrimaryButton.tsx
│   ├── SearchBar.tsx
│   └── ErrorMessage.tsx
├── constants
│   ├── Colors.ts
│   └── Data.ts
├── types
│   └── task.ts
```

## Prerequisites

- Node.js (v14.x or later)
- Expo CLI

## Setup Instructions

### Step 1: Clone the Repository

Clone this repository to your local machine using:

```bash
git clone <repository-url>
```

### Step 2: Navigate to the Project Directory

```bash
cd task-manager
```

### Step 3: Install Dependencies

Install the required dependencies using:

```bash
npm install
```

### Step 4: Start the Development Server

Run the Expo development server:

```bash
npx expo start
```

### Step 5: Open the App

- Use the QR code generated in the terminal to open the app on your mobile device via the Expo Go app (available on iOS and Android).
- Alternatively, use an Android or iOS emulator.

## Project Structure Overview

- **`app/_layout.tsx`**: Defines the layout and navigation for the app.
- **`app/index.tsx`**: Main screen for task management.
- **`app/task/[id].tsx`**: Task details screen.
- **`components/`**: Contains reusable components like modals, buttons, and task lists.
- **`constants/`**: Includes mock data and color themes.
- **`types/`**: Defines TypeScript types for tasks.

## Customization

To modify the color scheme, update the `Colors` object in `constants/Colors.ts`.

## Future Enhancements

- Add persistent storage for tasks using AsyncStorage or a database.
- Implement user authentication.
- Add notifications for task reminders.

## License

This project is licensed under the MIT License.

---

Enjoy using the Task Manager app! Feel free to contribute by submitting issues or pull requests to improve the app.
