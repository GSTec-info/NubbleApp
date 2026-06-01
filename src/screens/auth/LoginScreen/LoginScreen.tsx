import { Text } from "../../../components/Text";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { TextInput } from "../../../components/TextIput/TextInput";
import { Screen } from "../../../components/Screen/Screen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../routes/Router/Router";
import { Pressable } from "react-native";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

export function LoginScreen({ navigation }: LoginScreenProps) {
  function handleGoForgotPassword() {
    navigation.navigate("ForgotPasswordScreen");
  }

  function navigateToSignUpScreen() {
    navigation.navigate("SignUpScreen");
  }

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
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        RightIcon={<Icon name="eyeOn" />}
      />
      <Pressable onPress={handleGoForgotPassword}>
        <Text
          preset="paragraphSmall"
          color="primary"
          bold>
          Esqueci minha senha
        </Text>
      </Pressable>

      <Button
        title="Entrar"
        mt="s48"
      />

      <Button
        title="Criar uma conta"
        preset="outline"
        mt="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
