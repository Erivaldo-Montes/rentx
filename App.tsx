import { StatusBar } from "react-native";
import { Login } from "./src/screens/Login";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import {
  useFonts,
  Archivo_700Bold,
  Archivo_600SemiBold,
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
      <Login />
    </ThemeProvider>
  );
}
