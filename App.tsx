import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme/theme";
import { Router } from "./src/routes/Router/Router";

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
