import React from "react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <SafeAreaProvider>
          <Stack screenOptions={{ animation: "none" }}>
            <Stack.Screen
              name="Login" // Matches app/Login.js
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register" // Matches app/Register.js
              options={{
                title: "Registration",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PasswordRecovery" // Matches app/PasswordRecovery.js
              options={{ title: "Forgot Password?", headerShown: false }}
            />
            <Stack.Screen
              name="dashboard" // Matches app/dashboard/index.js (folder routing)
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
