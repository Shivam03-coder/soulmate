import { hp, wp } from "@/helpers/common";
import React from "react";
import { Pressable, Text } from "react-native";

interface HighlightableBtnTextProps {
  text: string;
  onPress?: () => void;
}

export const HighlightableBtnText: React.FC<HighlightableBtnTextProps> = ({
  text,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Text
        style={{
          textAlign: "right",
          fontWeight: "500",
          fontSize: hp(2),
          paddingInline: wp(1),
          color: "blue",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};
