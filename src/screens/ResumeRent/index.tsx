import { BulletHeader } from "@/components/BulletHeader";
import {
  Container,
  Header,
  BodyContent,
  Detail,
  Brand,
  Name,
  Period,
  Price,
  Description,
  Rent,
  Accessories,
  DatePeriod,
  CalendarIcon,
  DateContainer,
  DateText,
  PeriodToRent,
  Invoice,
  InvoiceText,
  RentalDaily,
  InvoiceContainer,
  Total,
  RendDetails,
  ButtonContainer,
} from "./styles";
import { ImageSlider } from "@/components/ImageSlider";
import { CarDto } from "@/DTOs/Car";
import { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import { axios } from "@/services/api";
import { Loading } from "@/components/Loading";
import { AccessoryIcon } from "@/components/AccessoryIcon";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { Button } from "@/components/Button";

type Params = {
  carId: string;
};

type BulletProps = {
  activeBullets: number;
  bulletsNumber: number;
};

export function ResumeRent() {
  const [car, setCar] = useState<CarDto>({} as CarDto);
  const [bullets, setBullets] = useState<BulletProps>();
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  const navigation = useNavigation();

  const route = useRoute();
  // const { carId } = route.params as Params;

  function handleRentNow() {
    navigation.navigate("ConfirmScreen", {
      message: `Agora você só precisa ir${"\n"} até a concessionária da RENTX`,
      nextScreenRoute: "Home",
      title: "Carro alugado",
    });
  }

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
      const response = await axios.get(
        `/cars/535e8de8-721b-4bac-8b72-7d29be7da467`
      );

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
      await NavigationBar.setBackgroundColorAsync(theme.COLORS["gray-100"]);
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
            <RendDetails>
              <PeriodToRent>
                <CalendarIcon>
                  <Feather
                    name="calendar"
                    size={24}
                    color={theme.COLORS.white}
                  />
                </CalendarIcon>
                <DateContainer>
                  <DateText>DE</DateText>
                  <DatePeriod>12/12/2242</DatePeriod>
                </DateContainer>
                <Feather
                  name="chevron-right"
                  size={15}
                  color={theme.COLORS["gray-400"]}
                />
                <DateContainer>
                  <DateText>ATÈ</DateText>
                  <DatePeriod>12/12/2242</DatePeriod>
                </DateContainer>
              </PeriodToRent>
              <Invoice>
                <InvoiceText>total</InvoiceText>
                <InvoiceContainer>
                  <RentalDaily>R$343.23 x 23</RentalDaily>
                  <Total>R$ 23332.34</Total>
                </InvoiceContainer>
              </Invoice>
            </RendDetails>
          </BodyContent>
          <ButtonContainer>
            <Button
              styleButtom="GREEN"
              title="Alugar agora"
              onPress={handleRentNow}
            />
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}
