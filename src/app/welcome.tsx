import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/shared/screenwrapper";
import Lottie from "@/components/shared/lottie";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "@/components/ui/Button";
import { Styles, Texts } from "@/stylesheet";

const Welcomescreen = () => {
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={Styles.conatiner}>
        <View>
          <Lottie src={require("assets/lottie/couple.json")} />
        </View>
        <View>
          <View style={Styles.flexhorizontal}>
            <Text style={Texts.h1}>SOULMATE</Text>
            <AntDesign name="dingding" size={34} />
          </View>
          <Text style={[Texts.h4, screenstyle.punchline]}>
            A new generation dating app. Connect with your perfect partner using
            AI.
          </Text>
        </View>
        <View style={screenstyle.footer}>
          <Button
            buttonStyle={screenstyle.btnstyle}
            textStyle={screenstyle.btntext}
            title="Getting Started...."
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcomescreen;

// ================== STYELS ===================

const screenstyle = StyleSheet.create({
  punchline: {
    textAlign: "center",
  },
  btnstyle: {
    borderRadius: 20,
    backgroundColor: "#A076F9",
    elevation: 5,
  },
  btntext: {
    color: "balck",
    fontSize: 26,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
  },
});
