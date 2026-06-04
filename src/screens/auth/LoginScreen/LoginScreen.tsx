import { Text } from "../../../components/Text";
import Button from "../../../components/Button";
import { Screen } from "../../../components/Screen/Screen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../routes/Router/Router";
import { Pressable } from "react-native";

import { useForm } from "react-hook-form";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

export type LoginFormType = {
  email: string;
  password: string;
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  function handleGoForgotPassword() {
    navigation.navigate("ForgotPasswordScreen");
  }

  function navigateToSignUpScreen() {
    navigation.navigate("SignUpScreen");
  }

  function onSubmit({ email, password }: LoginFormType) {
    console.log(email, password);
  }

  const { control, formState, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

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

      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: "Campo obrigatório",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "E-mail inválido",
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s20" }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          required: "Campo obrigatório",
          minLength: {
            value: 8,
            message: "Deve ter pelo menos 8 caracteres",
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: "Deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
          },
        }}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: "s20" }}
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
        disabled={!formState.isValid}
        title="Entrar"
        mt="s48"
        onPress={handleSubmit(onSubmit)}
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
