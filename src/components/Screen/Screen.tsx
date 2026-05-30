import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "../Box";
import Icon from "../Icon";
import { Text } from "../Text";
import { Platform, ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}
export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={scrollable}
          style={{ flex: 1 }}
          keyboardShouldPersistTaps="handled">
          <Box
            paddingHorizontal="s24"
            pb="s24">
            {canGoBack && (
              <Box
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
              </Box>
            )}
            {children}
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
