import { Screen, Text } from "@components";

import type { AppScreenProps } from "@routes";

type MyProfileScreenProps = AppScreenProps<"MyProfileScreen">;

export function MyProfileScreen(props: MyProfileScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">MyProfileScreen</Text>
    </Screen>
  );
}
