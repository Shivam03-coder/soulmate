import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/shared/screenwrapper";
import Lottie from "@/components/shared/lottie";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "@/components/ui/Button";
import { Styles, Texts } from "@/stylesheet";
import { hp, wp } from "@/helpers/common";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const Router = useRouter();

  return (
    <View style={Styles.conatiner}>
      {/* // ========== LOTTIE ============= */}

      <View>
        <Lottie src={require("assets/lottie/couple.json")} />
      </View>

      {/* // ==========  APP-NAME ============= */}

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

      {/* // ========== LOGIN-BUTTON ============= */}

      <View style={screenstyle.footer}>
        <Button
          buttonStyle={screenstyle.btnstyle}
          textStyle={screenstyle.btntext}
          title="Getting Started...."
        />
        <View style={screenstyle.BottomTextContainer}>
          <Text style={Texts.h5}>Alreday have an account !</Text>
          <Pressable onPress={() => Router.push("/login")}>
            <Text style={[Texts.h5, screenstyle.Logintext]}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

// ================== SCREEN STYELS ===================

const screenstyle = StyleSheet.create({
  punchline: {
    textAlign: "center",
  },
  btnstyle: {
    borderRadius: 8,
    backgroundColor: "#A076F9",
    elevation: 5,
  },
  btntext: {
    color: "balck",
    fontSize: 26,
    fontWeight: "500",
  },
  footer: {
    width: "100%",
    display: "flex",
    gap: 16,
  },
  BottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  Logintext: {
    fontWeight: "bold",
    color: "#865DFF",
    fontSize: hp(2),
  },
});
