import { Button, FormPasswordInput, FormTextInput, Screen, Text } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";

import type { AuthScreenProps } from "@routes";

import { useForm } from "react-hook-form";
import { Alert, Pressable } from "react-native";
import type { LoginSchema } from "./LoginSchema";
import { loginSchema } from "./LoginSchema";

type LoginScreenProps = AuthScreenProps<"LoginScreen">;

export function LoginScreen({ navigation }: LoginScreenProps) {
  function handleGoForgotPassword() {
    navigation.navigate("ForgotPasswordScreen");
  }

  function navigateToSignUpScreen() {
    navigation.navigate("SignUpScreen");
  }

  function onSubmit({ email, password }: LoginSchema) {
    Alert.alert(email, password);
  }

  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
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
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s20" }}
      />

      <FormPasswordInput
        control={control}
        name="password"
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
