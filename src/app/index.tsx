import React, { Component } from "react";
import ScreenWrapper from "@/components/shared/screenwrapper";
import { RelativePathString, useRouter } from "expo-router";
import Button from "@/components/ui/button";
import { View } from "react-native";

const Indexpage = () => {
  const Router = useRouter();
  return (
    <ScreenWrapper bg="#f2f8ff">
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          onPress={() => Router.push("/welcome" as RelativePathString)}
          title="GO"
        />
      </View>
    </ScreenWrapper>
  );
};

export default Indexpage;
