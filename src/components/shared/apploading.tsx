import { View, Text, StyleSheet } from "react-native";
import { Plane } from "react-native-animated-spinkit";

const Apploading = () => {
  return (
    <View style={styles.container}>
      <Plane size={48} color="#FFF" />
    </View>
  );
};

export default Apploading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
