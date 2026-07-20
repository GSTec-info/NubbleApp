import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export function Router() {
  const autenticated = true;

  return <NavigationContainer>{autenticated ? <AppStack /> : <AuthStack />}</NavigationContainer>;
}
