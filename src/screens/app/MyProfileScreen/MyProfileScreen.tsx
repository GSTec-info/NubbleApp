import { Screen, Text } from "@components";

import type { AppTabScreenProps } from "@routes";

type MyProfileScreenProps = AppTabScreenProps<"MyProfileScreen">;

export function MyProfileScreen(props: MyProfileScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">MyProfileScreen</Text>
    </Screen>
  );
}
