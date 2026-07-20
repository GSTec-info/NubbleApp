import { Screen, Text } from "@components";

import type { AppScreenProps } from "@routes";

type SettingsScreenProps = AppScreenProps<"SettingsScreen">;

export function SettingsScreen(props: SettingsScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">SettingsScreen</Text>
    </Screen>
  );
}
