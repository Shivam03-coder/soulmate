import { Pressable, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { RelativePathString, useRouter } from "expo-router";
import { wp } from "@/helpers/common";

const BackButton = ({
  size = 26,
  route = "",
}: {
  size?: number;
  route?: string;
}) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        if (route) {
          router.push(route as unknown as RelativePathString);
        } else {
          router.back();
        }
      }}
      style={style.backbtn} // Add padding for better pressability
    >
      <AntDesign name="arrowleft" size={size} color="black" />
    </Pressable>
  );
};

export default BackButton;

const style = StyleSheet.create({
  backbtn: {
    backgroundColor: "#B9E5E8",
    padding: 10,
    width: wp(12),
    borderRadius: 10,
    elevation: 2,
  },
});
