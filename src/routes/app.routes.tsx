import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { Platform } from "react-native";
import { Home } from "@/screens/Home";
import { Schedules } from "@/screens/Schedules";
import { Profile } from "@/screens/Profile";

import PeopleSvg from "@/assets/people.svg";
import HomeSvg from "@/assets/homeIcon.svg";
import CarSvg from "@/assets/car.svg";

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
        tabBarHideOnKeyboard: true,
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
      <Screen
        name="Schedules"
        component={Schedules}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg fill={color} width={ICON_SIZE} height={ICON_SIZE} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg fill={color} width={ICON_SIZE} height={ICON_SIZE} />
          ),
        }}
      />
    </Navigator>
  );
}
