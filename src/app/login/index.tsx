import { View, Text } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/shared/screenwrapper";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/shared/backbtn";
import LoginScreen from "@/screens/login.screen";

const LoginPage = () => {
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <BackButton route="/welcome" />
      <LoginScreen />
    </ScreenWrapper>
  );
};

export default LoginPage;
