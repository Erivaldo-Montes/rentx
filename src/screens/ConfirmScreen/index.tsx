import { useEffect } from "react";
import {
  Container,
  ImageView,
  Title,
  SuccessIconView,
  ButtonSubmit,
  ButtonText,
} from "./style";
import { useTheme } from "styled-components/native";
import BackgroundLogo from "../../assets/backgroundLogo.svg";
import { Dimensions, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";

import LottieView from "lottie-react-native";

const WIDTH = Dimensions.get("window").width;
const ORIGINAL_WIDTH = 375;
const ORIGINAL_HEIGHT = 235;
const ASPECT_RATIO = ORIGINAL_WIDTH / ORIGINAL_HEIGHT;

type ParamsNavigation = {
  title: string;
  message: string;
  nextScreenRoute: any;
};

export function ConfirmScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const { title, message, nextScreenRoute } = route.params as ParamsNavigation;

  function handleSuccess() {
    navigation.navigate(nextScreenRoute);
  }

  useEffect(() => {
    async function NavBar() {
      await NavigationBar.setBackgroundColorAsync(theme.COLORS["gray-900"]);
      await NavigationBar.setButtonStyleAsync("light");
    }
    NavBar();
  }, []);
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <ImageView style={{ width: WIDTH, aspectRatio: ASPECT_RATIO }}>
        <BackgroundLogo
          width="100%"
          height="100%"
          viewBox={`0 0 ${ORIGINAL_WIDTH} ${ORIGINAL_HEIGHT}`}
        />
      </ImageView>
      <SuccessIconView>
        <LottieView
          source={require("../../assets/SuccessLottie.json")}
          autoPlay
          loop={false}
        />
      </SuccessIconView>
      <Title>{title}</Title>
      <ButtonSubmit onPress={handleSuccess}>
        <ButtonText>ok</ButtonText>
      </ButtonSubmit>
    </Container>
  );
}
