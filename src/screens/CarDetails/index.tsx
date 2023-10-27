import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useRoute } from "@react-navigation/native";
import { BulletHeader } from "@/components/BulletHeader";
import { axios } from "@/services/api";
import { CarDto } from "@/DTOs/Car";
import { ImageSlider } from "@/components/ImageSlider";
import { Loading } from "@/components/Loading";
import { AccessoryIcon } from "@/components/AccessoryIcon";
import { Button } from "@/components/Button";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  Container,
  BodyContent,
  Brand,
  Description,
  Detail,
  Name,
  Period,
  Price,
  Rent,
  Accessories,
  About,
  ButtonContainer,
  Header,
} from "./styles";

type Params = {
  carId: string;
};

type BulletProps = {
  activeBullets: number;
  bulletsNumber: number;
};

export function CarDetails() {
  const [car, setCar] = useState<CarDto>({} as CarDto);
  const [bullets, setBullets] = useState<BulletProps>();
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const { carId } = route.params as Params;

  const translateY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateY.value = event.contentOffset.y;
  });

  const scrollAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateY.value, [0, 200], [1, 0]),
    };
  });

  function HeaderBulletUpdate(visibleItem: number) {
    const numberOfPhotos = car?.photos.length;
    setBullets({
      activeBullets: visibleItem + 1,
      bulletsNumber: numberOfPhotos,
    });
  }

  async function fetchCarInfo() {
    try {
      setIsLoading(true);
      const response = await axios.get(`/cars/${carId}`);

      setCar(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCarInfo();
  }, []);

  useEffect(() => {
    async function navBar() {
      await NavigationBar.setBackgroundColorAsync("#f4f5f6");
      await NavigationBar.setButtonStyleAsync("dark");
    }

    navBar();
  }, []);

  return (
    <Container>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
        translucent
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Animated.ScrollView onScroll={scrollHandler}>
            <Animated.View style={scrollAnimated}>
              <Header>
                <BulletHeader
                  bulletActive={bullets?.activeBullets!}
                  bulletsNumber={bullets?.bulletsNumber!}
                />
                <ImageSlider
                  imagesUrl={car?.photos}
                  onBulletUpdate={HeaderBulletUpdate}
                />
              </Header>
            </Animated.View>
            <BodyContent>
              <Detail>
                <Description>
                  <Brand>{car.brand}</Brand>
                  <Name>{car.name}</Name>
                </Description>
                <Rent>
                  <Period>{car.rent.period}</Period>
                  <Price>R$ {car.rent.price}</Price>
                </Rent>
              </Detail>
              <Accessories>
                {car.accessories.map((item, index) => {
                  return (
                    <AccessoryIcon
                      name={item.name}
                      type={item.type}
                      key={index}
                    />
                  );
                })}
              </Accessories>
              <About>{car.about}</About>
            </BodyContent>
          </Animated.ScrollView>
          <ButtonContainer>
            <Button title="Escolher o período do aluguel" styleButtom="RED" />
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}
