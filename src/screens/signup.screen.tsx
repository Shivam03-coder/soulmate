import Lottie from "@/components/shared/lottie";
import Button from "@/components/ui/button";
import Inputbox from "@/components/ui/input";
import { hp, wp } from "@/helpers/common";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
  const [IsLoading, setIsLoading] = useState<boolean>(false);

  const Router = useRouter();

  return (
    <View style={Screen.conatiner}>
      <Toast />
      <View>
        <Lottie
          heightp={20}
          widthp={30}
          src={require("@/assets/lottie/signup.json")}
        />
      </View>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, action) => {
          console.log(values.email);
          action.resetForm();
          Toast.show({
            type: "success",
            text1: "🎉 Signup Successful! 🎉",
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
                icon={<AntDesign name="user" size={30} color="black" />}
                placeholder="Enter your name"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
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
              </View>
              <Button
                loading={IsLoading}
                onPress={handleSubmit}
                title="SIGN-UP"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;

const Screen = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingTop: hp(1),
    justifyContent: "space-evenly",
  },
  greetingtext: {
    letterSpacing: 1,
  },
  form: {
    gap: hp(3),
    justifyContent: "space-around",
  },
});
