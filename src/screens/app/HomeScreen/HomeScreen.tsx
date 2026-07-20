import { Button, Screen, Text } from "@components";

import type { AppScreenProps } from "@routes";

type HomeScreenScreenProps = AppScreenProps<"HomeScreen">;

export function HomeScreen({ navigation }: HomeScreenScreenProps) {
  return (
    <Screen>
      <Text preset="headingLarge">HomeScreen</Text>

      <Button
        title="Ir para: Settings Screen"
        onPress={() => navigation.navigate("SettingsScreen")}
      />
    </Screen>
  );
}
