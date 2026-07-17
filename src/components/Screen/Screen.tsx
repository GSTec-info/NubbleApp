import { SafeAreaView } from "react-native-safe-area-context";
import { Box, TouchableOpacityBox } from "../Box";
import Icon from "../Icon";
import { Text } from "../Text";
import { Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { useNavigation } from "@react-navigation/native";

import type { ThemeColors } from "../../theme/theme";
import { useAppTheme } from "../../hooks/useAppTheme";
import { ScrollViewContainer, ViewContainer } from "./ScreenContainer";

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  backgroundColor?: ThemeColors;
}
export function Screen({ children, canGoBack = false, scrollable = false, backgroundColor = "grayWhite" }: ScreenProps) {
  const navigation = useNavigation();

  const { colors } = useAppTheme();

  const backgroundStyle = backgroundColor ? colors[backgroundColor] : colors.grayWhite;

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundStyle }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}>
        <Container>
          <Box
            paddingHorizontal="s24"
            pb="s24"
            pt="s24">
            {canGoBack && (
              <TouchableOpacityBox
                onPress={navigation.goBack}
                flexDirection="row"
                alignItems="center"
                mb="s24">
                <Icon
                  name="arrowLeft"
                  color="primary"
                />
                <Text
                  semiBold
                  preset="paragraphMedium"
                  ml="s8">
                  Voltar
                </Text>
              </TouchableOpacityBox>
            )}
            {children}
          </Box>
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
