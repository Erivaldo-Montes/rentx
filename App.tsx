import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Toast from "react-native-toast-message";
import { theme } from "./src/theme";
import { useFonts } from "expo-font";
import { Routes } from "./src/routes";
import { AppProvider } from "@/contexts/index";

import {
  Archivo_700Bold,
  Archivo_600SemiBold,
  Archivo_500Medium,
} from "@expo-google-fonts/archivo";
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
    Archivo_700Bold,
    Archivo_600SemiBold,
    Archivo_500Medium,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <AppProvider>
        <Routes />
      </AppProvider>
      <Toast />
    </ThemeProvider>
  );
}
