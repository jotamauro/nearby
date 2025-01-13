import { colors } from "@/styles/theme";
import { ActivityIndicator } from "react-native";
import { S } from "./loading.styles";

export const Loading = () => {
  return <ActivityIndicator color={colors.green.base} style={S.container} />;
};
