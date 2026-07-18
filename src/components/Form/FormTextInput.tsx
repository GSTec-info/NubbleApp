import type { TextInputProps } from "@components";
import { TextInput } from "@components";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import { Controller } from "react-hook-form";

export function FormTextInput<FormType extends FieldValues>({ control, rules, name, ...textInputProps }: UseControllerProps<FormType> & TextInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          {...textInputProps}
          errorMessage={fieldState?.error?.message}
          value={field.value}
          onChangeText={field.onChange}
        />
      )}
    />
  );
}
