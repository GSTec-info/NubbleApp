import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList, AuthStackParamList } from "./index";

export type AppScreenProps<RoutName extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, RoutName>;

export type AuthScreenProps<RoutName extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, RoutName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList, AuthStackParamList {}
  }
}
