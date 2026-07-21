import { Button, Screen, Text } from "@components";

import type { AppTabScreenProps } from "@routes";

type FavoriteScreenProps = AppTabScreenProps<"FavoriteScreen">;

export function FavoriteScreen({ navigation }: FavoriteScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">FavoriteScreen</Text>

      <Button
        title="Ir para Settings"
        onPress={() => navigation.navigate("SettingsScreen")}
      />
    </Screen>
  );
}
