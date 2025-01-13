import { Text, View } from "react-native";

import { colors } from "@/styles/theme";
import { IconTicket } from "@tabler/icons-react-native";
import { S } from "./coupon.styles";

type CouponProps = {
  code: string;
};

export const Coupon = ({ code }: CouponProps) => {
  return (
    <View style={S.container}>
      <Text style={S.title}>Utilize esse cupom</Text>

      <View style={S.content}>
        <IconTicket size={24} color={colors.green.light} />
        <Text style={S.code}>{code}</Text>
      </View>
    </View>
  );
};
