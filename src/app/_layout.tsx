import { Stack } from "expo-router";
import { useEffect } from "react";
import { LogBox } from "react-native";

const RootLayout = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;
