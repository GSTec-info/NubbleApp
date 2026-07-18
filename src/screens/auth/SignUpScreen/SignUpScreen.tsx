import { Button, FormPasswordInput, FormTextInput, Screen, Text } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetNavigationSuccess } from "@hooks";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@routes";
import { useForm } from "react-hook-form";
import type { SignUpSchema } from "./SignUpSchema";
import { signUpSchema } from "./SignUpSchema";

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "SignUpScreen">;

export function SignUpScreen({ navigation }: SignUpScreenProps) {
  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  function onSubmit() {
    reset({
      title: "Sua conta foi criada com sucesso!",
      description: "Agora é só fazer login na nossa plataforma.",
      icon: { name: "checkRound", color: "success" },
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
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: "s20" }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: "s20" }}
        autoCapitalize="words"
      />

      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s20" }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: "s48" }}
      />

      <Button
        disabled={!formState.isValid}
        title="Criar uma conta"
        onPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
}
