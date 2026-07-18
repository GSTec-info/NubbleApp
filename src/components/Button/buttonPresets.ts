import type { ThemeColors } from "../../theme/theme";
import type { TouchableOpacityBoxProps } from "../Box/Box";

export type ButtonPreset = "primary" | "outline";

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: "primary",
      },
      content: "primaryContrast",
    },
    disabled: {
      container: {
        backgroundColor: "gray4",
      },
      content: "gray2",
    },
  },
  outline: {
    default: {
      container: {
        backgroundColor: "grayWhite",
        borderWidth: 1,
        borderColor: "primary",
      },
      content: "primary",
    },
    disabled: {
      container: {
        backgroundColor: "grayWhite",
        borderWidth: 1,
        borderColor: "gray4",
      },
      content: "gray4",
    },
  },
};
