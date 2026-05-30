import { ActivityIndicator as RNActivityIndicator } from "react-native";
import type { ActivityIndicatorProps as RNActivityIndicatorProps } from "react-native";
import type { Theme, ThemeColors } from "../../theme/theme";
import { useTheme } from "@shopify/restyle";

interface ActivityIndicatorProps extends Omit<RNActivityIndicatorProps, "color"> {
  color?: ThemeColors;
}

export default function ActivityIndicator({ color = "primary" }: ActivityIndicatorProps) {
  const { colors } = useTheme<Theme>();
  return <RNActivityIndicator color={colors[color]} />;
}
