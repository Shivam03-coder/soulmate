import React, { forwardRef } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import { hp, wp } from "@/helpers/common";

interface InputProps extends TextInputProps {
  label: string;
  ContainerStyle?: StyleProp<ViewStyle>;
  LabelStyle?: StyleProp<TextStyle>;
  TextInputStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
}

const Inputbox = forwardRef<TextInput, InputProps>((props, ref) => {
  const { label, ContainerStyle, TextInputStyle, icon, ...TextInputProps } =
    props;

  return (
    <View style={[styles.container, ContainerStyle]}>
      {icon}
      <TextInput
        ref={ref}
        style={[styles.TextInputStyle, TextInputStyle]}
        placeholderTextColor="black"
        {...TextInputProps} // Spread remaining TextInput props
      />
    </View>
  );
});

export default Inputbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#A076F9",
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: wp(4),
    backgroundColor: "white",
  },
  TextInputStyle: {
    flex: 1,
    fontSize: hp(2.0),
    paddingLeft: wp(4.5),
    color: "black",
  },
});
