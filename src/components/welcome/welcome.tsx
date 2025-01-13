import { Image, Text, View } from "react-native";
import { S } from "./welcome.styles";

export const Welcome = () => {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={S.logo} />
      <Text style={S.title}>Boas vindas ao Nearby!</Text>
      <Text style={S.subtitle}>
        Tenha cupons de vantagem para usar em {"\n"}seus estabelecimentos
        favoritos.
      </Text>
    </View>
  );
};
