import { ScrollView, View } from "react-native";

export function ScrollViewContainer({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children }: { children: React.ReactNode }) {
  return <View style={{ flex: 1 }}>{children}</View>;
}
