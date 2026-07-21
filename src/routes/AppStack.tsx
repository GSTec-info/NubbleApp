/* ===== STACK PRINCIPAL PARA NAVEGAÇÃO DO APP =====*/

import type { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "@screens";

import type { AppTabNavigatorParamList } from "./AppTabNavigator";
import { AppTabNavigator } from "./AppTabNavigator";

export type AppStackParamList = {
  // Aqui eu deixo tipado para navegar para as telas de outro 'navigator' usando:
  //    navigation.navigate("AppTabNavigator", {
  //      screen: "FavoriteScreen",   ==> Nome da tela do navigator
  //    })
  AppTabNavigator: NavigatorScreenParams<AppTabNavigatorParamList>;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen
        name="AppTabNavigator"
        component={AppTabNavigator} // ==> NAVEGAÇÃO SECUNDÁRIA (BOTTOM TABS)
      />
      {/* === TELAS QUE FICARAM FORA DO "BOTTOM TABS" ===== */}
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}
