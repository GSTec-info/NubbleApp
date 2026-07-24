import { useTheme } from "@shopify/restyle";
import type { Theme, ThemeColors } from "@theme";
import type { ActivityIndicatorProps as RNActivityIndicatorProps } from "react-native";
import { ActivityIndicator as RNActivityIndicator } from "react-native";

interface ActivityIndicatorProps extends Omit<RNActivityIndicatorProps, "color"> {
  color?: ThemeColors;
}

export function ActivityIndicator({ color = "primary", ...activityIndicatorProps }: ActivityIndicatorProps) {
  const { colors } = useTheme<Theme>();
  return (
    <RNActivityIndicator
      color={colors[color]}
      {...activityIndicatorProps}
    />
  );
}
