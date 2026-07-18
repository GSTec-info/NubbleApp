import { Text } from "../../../components/Text";
import Button from "../../../components/Button";
import { Screen } from "../../../components/Screen/Screen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../routes/Router/Router";
import { Alert, Pressable } from "react-native";

import { useForm } from "react-hook-form";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";

import { loginSchema } from "./LoginSchema";
import type { LoginSchema } from "./LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

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
