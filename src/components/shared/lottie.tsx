import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const Lottie = ({ src }: { src: any }) => {
  const animation = useRef<LottieView>(null);
  return (
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: 350,
        height: 350,
      }}
      source={src}
      loop
    />
  );
};

export default Lottie;
