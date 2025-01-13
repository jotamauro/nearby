import { colors } from "@/styles/theme";
import { IconProps } from "@tabler/icons-react-native";
import React from "react";
import { Text, View } from "react-native";
import { S } from "./step.styles";

type StepProps = {
  title: string;
  subtitle: string;
  icon: React.ComponentType<IconProps>;
};

export const Step = ({ title, subtitle, icon: Icon }: StepProps) => {
  return (
    <View style={S.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={S.details}>
        <Text style={S.title}>{title}</Text>
        <Text style={S.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};
