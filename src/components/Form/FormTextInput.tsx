import { Controller } from "react-hook-form";
import type { UseControllerProps, FieldValues } from "react-hook-form";
import { TextInput, type TextInputProps } from "../TextIput/TextInput";

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
