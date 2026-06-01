import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../../../components/Button";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextIput/TextInput";
import type { RootStackParamList } from "../../../routes/Router/Router";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

type ForgotPasswordScreenProps = NativeStackScreenProps<RootStackParamList, "ForgotPasswordScreen">;

export function ForgotPasswordScreen({ navigation }: ForgotPasswordScreenProps) {
  const { reset } = useResetNavigationSuccess();
  function handleSubmitForm() {
    reset({
      title: "Enviamos as instruções para seu e-mail",
      description: "Clique no link enviado no seu e-mail para recuperar sua senha",
      icon: { name: "messageRound", color: "primary" },
    });
  }
  return (
    <Screen
      canGoBack
      scrollable>
      <Text
        preset="headingLarge"
        bold
        mb="s32">
        Esqueci minha senha
      </Text>

      <Text
        preset="paragraphLarge"
        mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <TextInput
        label="Email"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s20" }}
      />

      <Button
        title="Recuperar senha"
        onPress={handleSubmitForm}
      />
    </Screen>
  );
}
