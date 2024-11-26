import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({
  children,
  bg = "#f2f8ff",
}: {
  children: React.ReactNode;
  bg?: string;
}) => {
  const { top } = useSafeAreaInsets();

  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View
      style={{
        flex: 1,
        paddingTop,
        backgroundColor: bg,
        padding: 14,
      }}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
