import { useState } from "react";
import { type TextInputProps, TextInput } from "../TextIput/TextInput";
import Icon from "../Icon";

type PasswordInputProps = Omit<TextInputProps, "RightIcon">;

export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <TextInput
      {...props}
      secureTextEntry={!showPassword}
      RightIcon={
        <Icon
          name={showPassword ? "eyeOn" : "eyeOff"}
          onPress={handleShowPassword}
        />
      }
    />
  );
}
