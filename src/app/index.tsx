import { Button } from "@/components/button";
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { router } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const navigate = router.navigate;
  return (
    <View
      style={{
        flex: 1,
        padding: 30,
        gap: 40,
      }}
    >
      <Welcome />
      <Steps />
      <Button isloading={false} onPress={() => navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
