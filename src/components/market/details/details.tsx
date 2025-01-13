import { router } from "expo-router";
import { Text, View } from "react-native";

import { IconMapPin, IconPhone, IconTicket } from "@tabler/icons-react-native";
import { Info } from "../info/info";
import { S } from "./details.styles";

export type DetailsProps = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: DetailsProps;
};

export const Details = ({ data }: Props) => {
  const goBack = () => {
    router.back();
  };

  return (
    <View style={S.container}>
      <Text style={S.name}>{data.name}</Text>
      <Text style={S.description}>{data.description}</Text>
      <View style={S.group}>
        <Text style={S.title}>Informações</Text>
        <Info
          icon={IconTicket}
          description={`${data.coupons} cupons disponíveis`}
        />
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>
      <View style={S.group}>
        <Text style={S.title}>Regulamento</Text>
        {data.rules.map((rule) => (
          <Text key={rule.id} style={S.rules}>
            {`\u2022 ${rule.description}`}
          </Text>
        ))}
      </View>
    </View>
  );
};
