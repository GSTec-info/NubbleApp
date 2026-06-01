import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../routes/Router/Router";

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: RootStackParamList["SuccessScreen"]) {
    navigation.reset({
      index: 0,
      routes: [
        { name: "LoginScreen" },
        {
          name: "SuccessScreen",
          params,
        },
      ],
    });
  }

  return { reset };
}
