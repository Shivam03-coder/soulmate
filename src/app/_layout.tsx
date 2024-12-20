import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { LogBox } from "react-native";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter";
import Apploading from "@/components/shared/apploading";

const RootLayout = () => {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  

  useEffect(() => {
    LogBox.ignoreAllLogs();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Apploading />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    />
  );
};

export default RootLayout;
