import type { PasswordInputProps } from "@components";
import { PasswordInput } from "@components";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import { Controller } from "react-hook-form";

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
