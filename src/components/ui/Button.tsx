import AntDesign from "@expo/vector-icons/AntDesign";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  Platform,
} from "react-native";

interface ButtonsProps {
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  onPress?: () => void;
  loading?: boolean;
}

const Button: React.FC<ButtonsProps> = ({
  buttonStyle,
  textStyle,
  title,
  onPress = () => {},
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A076F9",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 26,
    fontWeight: "600",
  },
});

export default Button;
