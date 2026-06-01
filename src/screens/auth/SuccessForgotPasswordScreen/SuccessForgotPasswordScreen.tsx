import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text";
import type { RootStackParamList } from "../../../routes/Router/Router";

type SuccessForgotPasswordScreenProps = NativeStackScreenProps<RootStackParamList, "SuccessForgotPasswordScreen">;

export function SuccessForgotPasswordScreen({ navigation, route }: SuccessForgotPasswordScreenProps) {
  const { title, description, icon: iconProps } = route.params;

  function goBackToBegin() {
    // TODO: Navegar para a tela de login
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
