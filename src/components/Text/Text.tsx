import { createText } from "@shopify/restyle";
import type { TextStyle } from "react-native";

import type { Theme } from "../../theme/theme";

const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({ children, preset = "paragraphMedium", bold, italic, semiBold, style, ...sRTextProps }: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <SRText
      style={[$fontSizes[preset], { fontFamily }, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(preset: TextVariants, bold?: boolean, italic?: boolean, semiBold?: boolean) {
  if (preset === "headingLarge" || preset === "headingMedium" || preset === "headingSmall") {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}

export type TextVariants = "headingLarge" | "headingMedium" | "headingSmall" | "paragraphLarge" | "paragraphMedium" | "paragraphSmall" | "paragrapCaption" | "paragrapCaptionSmall";

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38 },
  headingMedium: { fontSize: 22, lineHeight: 26 },
  headingSmall: { fontSize: 18, lineHeight: 23 },
  paragraphLarge: { fontSize: 18, lineHeight: 25 },
  paragraphMedium: { fontSize: 16, lineHeight: 22 },
  paragraphSmall: { fontSize: 14, lineHeight: 20 },
  paragrapCaption: { fontSize: 12, lineHeight: 17 },
  paragrapCaptionSmall: { fontSize: 10, lineHeight: 14 },
};

export const $fontFamily = {
  black: "Satoshi-Black",
  blackItalic: "Satoshi-BlackItalic",
  bold: "Satoshi-Bold",
  boldItalic: "Satoshi-BoldItalic",
  italic: "Satoshi-Italic",
  light: "Satoshi-Light",
  lightItalic: "Satoshi-LightItalic",
  medium: "Satoshi-Medium",
  mediumItalic: "Satoshi-MediumItalic",
  regular: "Satoshi-Regular",
};
