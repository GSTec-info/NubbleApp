import { Button, Screen, Text } from "@components";

import type { AppTabScreenProps } from "@routes";

type HomeScreenProps = AppTabScreenProps<"HomeScreen">;

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
