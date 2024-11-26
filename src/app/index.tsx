import { Button, Text, View } from "react-native";
import React, { Component } from "react";
import ScreenWrapper from "@/components/shared/screenwrapper";
import { useRouter } from "expo-router";

const Indexpage = () => {
  const Router = useRouter();
  return (
    <ScreenWrapper bg="#f2f8ff">
      <Button
        onPress={() => Router.push("/welcome")}
        title="GO"
        color="#001f3f"
      />
    </ScreenWrapper>
  );
};

export default Indexpage;
