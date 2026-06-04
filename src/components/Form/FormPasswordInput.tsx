import { Controller } from "react-hook-form";
import type { UseControllerProps, FieldValues } from "react-hook-form";

import { PasswordInput } from "../PasswordInput/PasswordInput";
import type { PasswordInputProps } from "../PasswordInput/PasswordInput";

export function FormPasswordInput<FormType extends FieldValues>({ control, rules, name, ...passwordInputProps }: UseControllerProps<FormType> & PasswordInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <PasswordInput
          {...passwordInputProps}
          errorMessage={fieldState?.error?.message}
          value={field.value}
          onChangeText={field.onChange}
        />
      )}
    />
  );
}
