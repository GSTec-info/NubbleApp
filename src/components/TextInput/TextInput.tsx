import { useAppTheme } from "@hooks";
import { useRef } from "react";
import type { TextInputProps as RNTextInputProps, TextStyle } from "react-native";
import { Pressable, TextInput as RNTextInput } from "react-native";
import type { BoxProps } from "../Box/Box";
import { Box } from "../Box/Box";
import { $fontFamily, $fontSizes, Text } from "../Text/Text";

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightIcon?: React.ReactElement;
  boxProps?: BoxProps;
}
export function TextInput({ label, errorMessage, RightIcon, boxProps, ...restRNTextInputProps }: TextInputProps) {
  const { colors } = useAppTheme();
  const refInput = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    padding: "s16",
    borderWidth: errorMessage ? 2 : 1,
    borderRadius: "r12",
    borderColor: errorMessage ? "error" : "gray4",
    flexDirection: "row",
    alignItems: "center",
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={() => refInput?.current?.focus()}>
        <Text
          preset="paragraphMedium"
          mb="s8">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={refInput}
            style={$textInputStyle}
            placeholderTextColor={colors.gray2}
            autoCapitalize="none"
            {...restRNTextInputProps}
          />
          {RightIcon && <Box ml="s16">{RightIcon}</Box>}
        </Box>
        {errorMessage && (
          <Text
            preset="paragraphSmall"
            color="error"
            bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  flexGrow: 1,
  flexShrink: 1,
  ...$fontSizes.paragraphMedium,
};
