import { colors } from "@/styles/theme";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { S } from "./button.styles";

type ButtonProps = TouchableOpacityProps & {
  isloading?: boolean;
};

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
};
const Title = ({ children }: TextProps) => {
  return <Text style={S.title}>{children}</Text>;
};

const Icon = ({ icon: Icon }: IconProps) => {
  return <Icon size={24} color={colors.gray[100]} />;
};

export const Button = ({
  children,
  style,
  isloading = false,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[S.container, style]}
      disabled={isloading}
      {...rest}
    >
      {isloading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

Button.Title = Title;
Button.Icon = Icon;
