import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppTabNavigatorParamList } from "./AppTabNavigator";
import type { AppStackParamList, AuthStackParamList } from "./index";

export type AppScreenProps<RoutName extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, RoutName>;

export type AuthScreenProps<RoutName extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, RoutName>;

export type AppTabScreenProps<RouteName extends keyof AppTabNavigatorParamList> = CompositeScreenProps<BottomTabScreenProps<AppTabNavigatorParamList, RouteName>, NativeStackScreenProps<AppStackParamList, "AppTabNavigator">>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList, AuthStackParamList {}
  }
}
