import { Router } from "@routes";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "@theme";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </KeyboardProvider>
  );
}
export default App;
