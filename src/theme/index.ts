import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

function getFontSize(size: number) {
  return size / fontScale;
}

export const theme = {
  COLORS: {
    "gray-100": "#F4F5F6",
    "gray-200": "#E1E1E6",
    "gray-400": "#AEAEB3",
    "gray-500": "#7A7A80",
    "gray-700": "#47474D",
    "gray-800": "#29292E",
    "gray-900": "#1B1B1F",

    "red-100": "#FDEDEF",
    "red-600": "#DC1637",

    "green-600": "#03B252",

    white: "#fff",
  },
  FONT_FAMILY: {
    "archivo-medium": "Archivo_500Medium",
    "archivo-semiBold": "Archivo_600SemiBold",
    "archivo-regular": "Archivo_400Regular",
    "archivo-bold": "Archivo_700Bold",
    "inter-regular": "Inter_400Regular",
    "inter-bold": "Inter_700Bold",
    "inter-medium": "Inter_500Medium",
  },
  FONT_SIZE: {
    "4XL": getFontSize(40),
    "3XL": getFontSize(30),
    base: getFontSize(25),
    xl: getFontSize(20),
    sm: getFontSize(15),
    xs: getFontSize(12),
    xss: getFontSize(10),
  },
  LINE_HEIGH: {
    "leading-6": 25,
    "leading-7": 30,
  },
};
