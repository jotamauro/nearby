import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import { router } from "expo-router";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { S } from "./place.styles";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export const Place = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity
      style={S.container}
      onPress={() => router.navigate(`/market/${data.id}`)}
    >
      <Image style={S.image} source={{ uri: data.cover }} />
      <View style={S.content}>
        <Text style={S.name}>{data.name}</Text>
        <Text style={S.description} numberOfLines={2}>
          {data.description}
        </Text>
        <View style={S.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={S.coupons}>{data.coupons} Cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
