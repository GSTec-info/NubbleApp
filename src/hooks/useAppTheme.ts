import { useTheme } from "@shopify/restyle";
import type { Theme } from "../theme/theme";

export function useAppTheme() {
  const theme = useTheme<Theme>();
  return theme;
}
