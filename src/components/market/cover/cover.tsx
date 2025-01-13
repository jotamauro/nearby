import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { ImageBackground, View } from "react-native";

import { Button } from "@/components/button";
import { S } from "./cover.styles";

type Props = {
  uri: string;
};
export const Cover = ({ uri }: Props) => {
  const goBack = () => {
    router.back();
  };

  return (
    <ImageBackground source={{ uri }} style={S.container}>
      <View style={S.header}>
        <Button
          onPress={goBack}
          style={{
            width: 40,
            height: 40,
          }}
        >
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
};
