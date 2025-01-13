import { colors } from "@/styles/colors";
import { IconProps } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { S } from "./info.styles";

export type InfoProps = {
  description: string;
  icon: React.ComponentType<IconProps>;
};

export const Info = ({ icon: Icon, description }: InfoProps) => {
  const goBack = () => {
    router.back();
  };

  return (
    <View style={S.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={S.text}>{description}</Text>
    </View>
  );
};
