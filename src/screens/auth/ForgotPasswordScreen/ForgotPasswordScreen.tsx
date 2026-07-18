import { Button, FormTextInput, Screen, Text } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetNavigationSuccess } from "@hooks";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@routes";
import { useForm } from "react-hook-form";

import type { ForgotPasswordSchema } from "./ForgotPasswordSchema";
import { forgotPasswordSchema } from "./ForgotPasswordSchema";

type ForgotPasswordScreenProps = NativeStackScreenProps<RootStackParamList, "ForgotPasswordScreen">;

export function ForgotPasswordScreen({ navigation }: ForgotPasswordScreenProps) {
  const { reset } = useResetNavigationSuccess();

  const { control, formState } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  function submitForm() {
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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s20" }}
      />

      <Button
        title="Recuperar senha"
        onPress={submitForm}
        disabled={!formState}
      />
    </Screen>
  );
}
