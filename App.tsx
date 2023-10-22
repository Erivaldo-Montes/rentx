import { useEffect } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Toast from "react-native-toast-message";
import * as NavigationBar from "expo-navigation-bar";
import { theme } from "./src/theme";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoute } from "./src/routes/app.route";

import {
  Archivo_700Bold,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import { SignUpFirstStep } from "./src/screens/SignUp/SignUpFirstStep";

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
    Archivo_700Bold,
    Archivo_600SemiBold,
  });

  useEffect(() => {
    async function navBar() {
      await NavigationBar.setBackgroundColorAsync("#f4f5f6");
      await NavigationBar.setButtonStyleAsync("dark");
    }

    navBar();
  }, []);

  if (!fontsLoaded && !fontsError) {
    return null;
  }
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={"transparent"}
          translucent
        />
        <AppRoute />
        <Toast />
      </ThemeProvider>
    </NavigationContainer>
  );
}
