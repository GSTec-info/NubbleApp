import { Button, Screen, Text } from "@components";

import type { AppScreenProps } from "@routes";

type SettingsScreenProps = AppScreenProps<"SettingsScreen">;

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">SettingsScreen</Text>

      {/* === Navega para uma tela de outro 'navigator' ===*/}
      <Button
        title="Ir para: FavoriteScreen"
        onPress={() =>
          navigation.navigate("AppTabNavigator", {
            screen: "FavoriteScreen",
          })
        }
      />
    </Screen>
  );
}
