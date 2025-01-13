import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.gray[200],
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    gap: 16,
    height: 120,
    padding: 8,
    width: "100%",
  },
  image: {
    width: 116,
    height: 104,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    color: colors.gray[600],
    fontSize: 14,
    fontFamily: fontFamily.medium,
  },
  description: {
    color: colors.gray[500],
    fontSize: 12,
    fontFamily: fontFamily.regular,
  },
  footer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 10,
  },
  coupons: {
    color: colors.gray[400],
    fontSize: 12,
    fontFamily: fontFamily.regular,
  },
});
