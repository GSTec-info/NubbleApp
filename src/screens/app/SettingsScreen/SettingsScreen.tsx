import { Screen, Text } from "@components";

import type { AppScreenProps } from "@routes";

type SettingsScreenScreenProps = AppScreenProps<"SettingsScreen">;

export function SettingsScreen(props: SettingsScreenScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">SettingsScreen</Text>
    </Screen>
  );
}
