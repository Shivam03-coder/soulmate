import { hp } from "@/helpers/common";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(5),
  },
  flexhorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export const Texts = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
  },
  h2: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8,
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 6,
  },
  h4: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 4,
  },
  h5: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 3,
  },
  h6: {
    fontSize: 14,
    fontWeight: "500",
    marginVertical: 2,
  },
  p: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 24,
    marginVertical: 5,
  },
});
