import { Text } from "../../../components/Text";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { TextInput } from "../../../components/TextIput/TextInput";
import { Screen } from "../../../components/Screen/Screen";

export function LoginScreen() {
  return (
    <Screen>
      <Text
        preset="headingLarge"
        mb="s8">
        Olá
      </Text>
      <Text
        preset="paragraphLarge"
        mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        errorMessage="mensagem de erro..."
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        RightIcon={<Icon name="eyeOn" />}
      />
      <Text
        preset="paragraphSmall"
        color="primary"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        title="Entrar"
        mt="s48"
      />

      <Button
        title="Criar uma conta"
        preset="outline"
        mt="s12"
      />
    </Screen>
  );
}
