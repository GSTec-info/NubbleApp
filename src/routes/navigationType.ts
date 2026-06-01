import type { RootStackParamList } from "./Router/Router";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
