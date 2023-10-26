import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import HomeSvg from "@/assets/homeIcon.svg";
import { Platform } from "react-native";
import { Home } from "@/screens/Home";
import { AppStack } from "./appStack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoute() {
  const ICON_SIZE = 24;
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS["red-600"],
        tabBarInactiveTintColor: theme.COLORS["gray-400"],
        tabBarStyle: {
          backgroundColor: theme.COLORS["gray-100"],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: 26,
          paddingTop: 26,
        },
      }}
    >
      <Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={ICON_SIZE} height={ICON_SIZE} />
          ),
        }}
      />
    </Navigator>
  );
}
