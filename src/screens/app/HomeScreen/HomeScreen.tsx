import { Button, Screen, Text } from "@components";

import type { AppScreenProps } from "@routes";

type HomeScreenProps = AppScreenProps<"HomeScreen">;

export function HomeScreen({ navigation }: HomeScreenProps) {
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
