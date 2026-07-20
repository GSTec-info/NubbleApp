import { Screen, Text } from "@components";

import type { AppScreenProps } from "@routes";

type FavoriteScreenProps = AppScreenProps<"FavoriteScreen">;

export function FavoriteScreen(props: FavoriteScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">FavoriteScreen</Text>
    </Screen>
  );
}
