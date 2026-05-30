import Button from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextIput/TextInput";

export function SignUpScreen() {
  function handleSubmitForm() {
    // TOTO: Implementar
  }
  return (
    <Screen
      canGoBack
      scrollable>
      <Text
        preset="headingLarge"
        bold
        mb="s32">
        Criar uma conta
      </Text>

      <TextInput
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: "s20" }}
      />

      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: "s20" }}
      />

      <TextInput
        label="Email"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s20" }}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: "s48" }}
      />

      <Button
        title="Criar uma conta"
        onPress={handleSubmitForm}
      />
    </Screen>
  );
}
