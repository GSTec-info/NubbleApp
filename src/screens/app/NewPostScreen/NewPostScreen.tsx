import { Screen, Text } from "@components";

import type { AppScreenProps } from "@routes";

type NewPostScreenProps = AppScreenProps<"NewPostScreen">;

export function NewPostScreen(props: NewPostScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">NewPostScreen</Text>
    </Screen>
  );
}
