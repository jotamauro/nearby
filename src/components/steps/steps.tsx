import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { Step } from "../step/step";
import { S } from "./steps.styles";

const listItems = [
  {
    title: "Encontre estabelecimentos",
    subtitle: "Veja locais perto de você que são parceiros Nearby",
    icon: IconMapPin,
  },
  {
    title: "Ative o cupom com QR Code",
    subtitle: "Escaneie o código no estabelecimento para usar o benefício",
    icon: IconQrcode,
  },
  {
    title: "Garanta vantagens perto de você",
    subtitle:
      "Ative cupons onde estiver, em diferentes tipos de estabelecimento",
    icon: IconTicket,
  },
];
export const Steps = () => {
  return (
    <View style={S.container}>
      <Text style={S.title}>Veja como funciona</Text>
      {listItems.map((item, index) => (
        <Step
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
        />
      ))}
    </View>
  );
};
