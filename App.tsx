import { StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Toast from "react-native-toast-message";
import { theme } from "./src/theme";
import { useFonts } from "expo-font";
import { Routes } from "./src/routes";
import { AppProvider } from "@/contexts/index";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { Splashscreen } from "@/screens/SplahScreen";
import * as NavigationBar from "expo-navigation-bar";
import {
  Archivo_700Bold,
  Archivo_600SemiBold,
  Archivo_500Medium,
  Archivo_400Regular,
} from "@expo-google-fonts/archivo";
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { useFocusEffect } from "@react-navigation/native";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_700Bold,
    Archivo_600SemiBold,
    Archivo_500Medium,
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync().then();
  }

  return (
    <View>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={"transparent"}
          translucent
        />
        <AppProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes />
          </GestureHandlerRootView>
        </AppProvider>
        <Toast />
      </ThemeProvider>
    </View>
  );
}
