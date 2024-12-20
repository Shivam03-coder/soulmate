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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const Router = useRouter();

  return (
    <View style={styles.container}>
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
        onSubmit={async ({ email, password, name }, action) => {
          console.log(email, password);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={styles.form}>
              <Inputbox
                value={values.name}
                icon={<AntDesign name="user" size={30} color="black" />}
                placeholder="Enter your name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
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
                loading={isLoading}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(1),
    justifyContent: "space-evenly",
    paddingHorizontal: wp(5),
  },
  form: {
    gap: hp(3),
    justifyContent: "space-around",
  },
});
