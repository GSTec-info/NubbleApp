import type { IconProps } from "@components";
import type { AppTabNavigatorParamList } from "./AppTabNavigator";

type MapTabBarRoutesProps = Record<
  keyof AppTabNavigatorParamList,
  {
    label: string;
    icon: {
      focused: IconProps["name"];
      unfocused: IconProps["name"];
    };
  }
>;

export const mapTabBarRoutes: MapTabBarRoutesProps = {
  HomeScreen: {
    label: "Início",
    icon: {
      focused: "homeFill",
      unfocused: "home",
    },
  },
  NewPostScreen: {
    label: "Novo Post",
    icon: {
      focused: "newPost",
      unfocused: "newPost",
    },
  },
  FavoriteScreen: {
    label: "Favorito",
    icon: {
      focused: "bookmarkFill",
      unfocused: "bookmark",
    },
  },
  MyProfileScreen: {
    label: "Meu Perfil",
    icon: {
      focused: "profileFill",
      unfocused: "profile",
    },
  },
};
