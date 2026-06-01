import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text";
import type { RootStackParamList } from "../../../routes/Router/Router";

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
