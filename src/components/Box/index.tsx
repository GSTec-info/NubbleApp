import { TouchableOpacity } from "react-native";
import type { TouchableOpacityProps } from "react-native";

/*---- Componentes e funções -------*/
import { createBox, createRestyleComponent, layout, spacing, spacingShorthand, border, backgroundColor, backgroundColorShorthand } from "@shopify/restyle";

/*---- Tipagens -------*/
import type { BackgroundColorProps, BackgroundColorShorthandProps, SpacingProps, SpacingShorthandProps, BorderProps, LayoutProps } from "@shopify/restyle";

/*---- Tema global -------*/
import type { Theme } from "../../theme/theme";

/*---- Tipagem para botão personalizado -------*/
export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> & BackgroundColorShorthandProps<Theme> & SpacingProps<Theme> & SpacingShorthandProps<Theme> & BorderProps<Theme> & LayoutProps<Theme> & TouchableOpacityProps;

/*---- Componente de Box -------*/
export const Box = createBox<Theme>();

/*---- Tipagem de propriedades do Box -------*/
export type BoxProps = React.ComponentProps<typeof Box>;

/*---- Componente de Botão Personalizado -------*/
export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>([layout, spacing, spacingShorthand, border, backgroundColor, backgroundColorShorthand], TouchableOpacity);
