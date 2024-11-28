import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { hp, wp } from "@/helpers/common";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

const Lottie = ({
  src,
  heightp,
  widthp,
  Lottiestyle,
}: {
  src: any;
  heightp: number;
  widthp?: number;
  Lottiestyle?: StyleProp<ViewStyle>;
}) => {
  const animation = useRef<LottieView>(null);
  return (
    <LottieView
      autoPlay
      ref={animation}
      style={[style.Lottiestyle, Lottiestyle]}
      source={src}
      loop
    />
  );
};

export default Lottie;

const style = StyleSheet.create({
  Lottiestyle: {
    width: wp(90),
    height: hp(42),
  },
});
