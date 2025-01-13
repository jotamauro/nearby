import { colors } from "@/styles/colors";
import { categoriesIcons } from "@/utils/categories-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { S } from "./category.styles";

type CategoryProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export const Category = ({
  name,
  iconId,
  isSelected = false,
  ...rest
}: CategoryProps) => {
  const Icon = categoriesIcons[iconId];
  return (
    <Pressable
      style={[S.container, isSelected && S.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[S.name, isSelected && S.nameSelected]}>{name}</Text>
    </Pressable>
  );
};
