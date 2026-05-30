import { Text } from "../Text";
import { TouchableOpacityBox } from "../Box";

import type { TouchableOpacityBoxProps } from "../Box";

import ActivityIndicator from "../ActivityIndicator";

import { buttonPresets } from "./buttonPresets";
import type { ButtonPreset } from "./buttonPresets";

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export default function Button({ title, loading, preset = "primary", disabled, ...touchableOpacityBoxProps }: ButtonProps) {
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
