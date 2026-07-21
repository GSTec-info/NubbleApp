import { Box, Icon, type IconProps, Text, TouchableOpacityBox } from "@components";
import { useAppSafeArea } from "@hooks";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { $shadowProps } from "@theme";
import type { AppTabNavigatorParamList } from "./AppTabNavigator";
import { mapTabBarRoutes } from "./MapTabBarRoutes";

/* 
  Link de Referência: https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar
  
  Obs: Usado o exemplo "MyTabBar" como ponto de partida
*/
export function AppTabBarCustom({ state, descriptors, navigation }: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();

  return (
    <Box
      flexDirection="row"
      justifyContent="space-around"
      paddingVertical="s12"
      style={{ paddingBottom: bottom, ...$shadowProps }}
      backgroundColor="background">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const tabItem = mapTabBarRoutes[route.name as keyof AppTabNavigatorParamList];

        const colorFocused: IconProps["color"] = isFocused ? "primary" : "backgroundContrast";
        const nameIcon = isFocused ? tabItem.icon.focused : tabItem.icon.unfocused;
        const labelIcon = tabItem.label;

        return (
          <TouchableOpacityBox
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            alignItems="center">
            <Icon
              name={nameIcon}
              color={colorFocused as IconProps["color"]}
            />
            <Text
              preset="paragrapCaption"
              color={colorFocused}
              marginTop="s4">
              {labelIcon}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
