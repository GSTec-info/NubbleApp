import type { TouchableOpacityBoxProps } from "@components";
import { ActivityIndicator, Text, TouchableOpacityBox } from "@components";
import type { ButtonPreset } from "./buttonPresets";
import { buttonPresets } from "./buttonPresets";

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({ title, loading, preset = "primary", disabled, ...touchableOpacityBoxProps }: ButtonProps) {
  const buttonUI = buttonPresets[preset][disabled ? "disabled" : "default"];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      borderRadius="r16"
      height={50}
      alignItems="center"
      justifyContent="center"
      disabled={disabled || loading}
      {...buttonUI.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonUI.content} />
      ) : (
        <Text
          color={buttonUI.content}
          preset="paragraphMedium"
          bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
