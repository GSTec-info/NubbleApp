import { Button, Icon, Screen, Text } from "@components";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "@routes";

type SuccessScreenProps = NativeStackScreenProps<RootStackParamList, "SuccessScreen">;

export function SuccessScreen({ navigation, route }: SuccessScreenProps) {
  const { title, description, icon: iconProps } = route.params;

  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...iconProps} />

      <Text
        preset="headingLarge"
        mt="s24">
        {title}
      </Text>
      <Text
        preset="paragraphLarge"
        mt="s16">
        {description}
      </Text>

      <Button
        title="Voltar ao início"
        onPress={goBackToBegin}
        mt="s40"
      />
    </Screen>
  );
}
