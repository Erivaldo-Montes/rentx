import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/screens/Home";
import { useTheme } from "styled-components/native";
import HomeSvg from "@/assets/homeIcon.svg";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoute() {
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
          paddingBottom: 19,
          paddingTop: 22,
        },
      }}
    >
      <Screen
        name="home"
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
