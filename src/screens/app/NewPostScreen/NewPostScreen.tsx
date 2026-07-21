import { Screen, Text } from "@components";

import type { AppTabScreenProps } from "@routes";

type NewPostScreenProps = AppTabScreenProps<"NewPostScreen">;

export function NewPostScreen(props: NewPostScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">NewPostScreen</Text>
    </Screen>
  );
}
