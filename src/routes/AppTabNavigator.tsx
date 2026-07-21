import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FavoriteScreen, HomeScreen, MyProfileScreen, NewPostScreen } from "@screens";
import { AppTabBarCustom } from "./AppTabBarCustom";

export type AppTabNavigatorParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabNavigatorParamList>();

export function AppTabNavigator() {
  function renderTabBarCustom(props: BottomTabBarProps) {
    return <AppTabBarCustom {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBarCustom}
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        name="NewPostScreen"
        component={NewPostScreen}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
      />
      <Tab.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
      />
    </Tab.Navigator>
  );
}
