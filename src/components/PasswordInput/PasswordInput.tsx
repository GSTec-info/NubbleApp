import type { TextInputProps } from "@components";

import { Icon, TextInput } from "@components";
import { useState } from "react";

export type PasswordInputProps = Omit<TextInputProps, "RightIcon">;

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
