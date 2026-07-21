import { Box, type BoxProps, Icon, Text, TouchableOpacityBox } from "@components";
import { useAppSafeArea, useAppTheme } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import type { ThemeColors } from "@theme";
import { Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollViewContainer, ViewContainer } from "./ScreenContainer";

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  backgroundColor?: ThemeColors;
}
export function Screen({ children, canGoBack = false, scrollable = false, backgroundColor = "grayWhite", style, ...boxProps }: ScreenProps) {
  const navigation = useNavigation();

  const { top, bottom } = useAppSafeArea();

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
            style={[{ paddingTop: top, paddingBottom: bottom }, style]}
            {...boxProps}>
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
