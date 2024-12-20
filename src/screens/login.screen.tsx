import Lottie from "@/components/shared/lottie";
import Button from "@/components/ui/button";
import Inputbox from "@/components/ui/input";
import { hp, wp } from "@/helpers/common";
import { Texts } from "@/stylesheet";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import { HighlightableBtnText } from "@/components/shared/highlightablebtntext";
import Toast from "react-native-toast-message";
import { RelativePathString, useRouter } from "expo-router";

const LoginScreen = () => {
  const [IsLoading, setIsLoading] = useState<boolean>(false);

  const Router = useRouter();

  return (
    <View style={Screen.conatiner}>
      <View>
        <Toast />
        <Text style={Texts.h1}>Hey,</Text>
        <Text style={[Texts.h2, Screen.greetingtext]}>Welcome Back.</Text>
        <Lottie heightp={30} src={require("assets/lottie/loginscreen.json")} />
      </View>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, action) => {
          console.log(values.email);
          action.resetForm();
          Toast.show({
            type: "success",
            text1: "🎉 Login Successful! 🎉",
            position: "bottom",
            text1Style: {
              fontSize: 17,
            },
            visibilityTime: 3000,
            swipeable: true,
          });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={Screen.form}>
              <Inputbox
                value={values.email}
                icon={<AntDesign name="adduser" size={30} color="black" />}
                placeholder="Enter your email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              <View style={{ gap: hp(1) }}>
                <Inputbox
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  icon={
                    <AntDesign
                      name="lock"
                      style={{ fontWeight: "800", padding: 0 }}
                      size={30}
                      color="black"
                    />
                  }
                  placeholder="Enter your password"
                />
                <HighlightableBtnText text="Forgotten Password ?" />
              </View>
              <Button
                loading={IsLoading}
                onPress={handleSubmit}
                title="LOG-IN"
              />
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={[Texts.h5, { textAlign: "center" }]}>
                  {" "}
                  Don't have an account?
                </Text>
                <HighlightableBtnText
                  onPress={() => Router.push("/signup" as RelativePathString)}
                  text="Sign up"
                />
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const Screen = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingTop: hp(1),
  },
  greetingtext: {
    letterSpacing: 1,
  },
  form: {
    gap: hp(2.3),
    justifyContent: "space-around",
  },
});

// ========== FORGOT PASSWORD ==============
