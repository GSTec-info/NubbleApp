/*---- Tipagens -------*/
import type { BackgroundColorProps, BackgroundColorShorthandProps, BorderProps, LayoutProps, SpacingProps, SpacingShorthandProps } from "@shopify/restyle";
/*---- Componentes e funções -------*/
import { backgroundColor, backgroundColorShorthand, border, createBox, createRestyleComponent, layout, spacing, spacingShorthand } from "@shopify/restyle";
/*---- Tema global -------*/
import type { Theme } from "@theme";
import type { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";

/*---- Tipagem para botão personalizado -------*/
export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> & BackgroundColorShorthandProps<Theme> & SpacingProps<Theme> & SpacingShorthandProps<Theme> & BorderProps<Theme> & LayoutProps<Theme> & TouchableOpacityProps;

/*---- Componente de Box -------*/
export const Box = createBox<Theme>();

/*---- Tipagem de propriedades do Box -------*/
export type BoxProps = React.ComponentProps<typeof Box>;

/*---- Componente de Botão Personalizado -------*/
export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>([layout, spacing, spacingShorthand, border, backgroundColor, backgroundColorShorthand], TouchableOpacity);
