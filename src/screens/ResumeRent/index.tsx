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
import { format } from "date-fns";
import { getPlatformDate } from "@/utils/getPlateformDate";
import { AppError } from "@/utils/AppError";
import Toast from "react-native-toast-message";

type Params = {
  carId: string;
  markedDates: string[];
};

type BulletProps = {
  activeBullets: number;
  bulletsNumber: number;
};

export function ResumeRent() {
  const [car, setCar] = useState<CarDto>({} as CarDto);
  const [bullets, setBullets] = useState<BulletProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [rentDate, setRentDate] = useState<{ start: string; end: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const theme = useTheme();

  const navigation = useNavigation();

  const route = useRoute();
  const { carId, markedDates } = route.params as Params;

  function handleRentNow() {
    setIsSubmitting(true);

    try {
      axios.post("/rentals", {
        user_id: "1",
        car_id: carId,
        start_date: new Date(markedDates[0]),
        end_date: new Date(markedDates[markedDates.length - 1]),
        total: markedDates.length * car.rent.price,
      });
      navigation.navigate("ConfirmScreen", {
        message: `Agora você só precisa ir${"\n"} até a concessionária da RENTX`,
        nextScreenRoute: "Home",
        title: "Carro alugado",
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const text1 = isAppError
        ? error.message
        : "Não foi possível realizar o alugel";

      Toast.show({
        text1,
        position: "top",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    setRentDate(() => {
      let end = format(
        getPlatformDate(new Date(markedDates[markedDates.length - 1])),
        "dd/MM/yyyy"
      );
      let start = format(
        getPlatformDate(new Date(markedDates[0])),
        "dd/MM/yyyy"
      );
      return {
        end,
        start,
      };
    });
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
          </Header>
          <ImageSlider
            imagesUrl={car?.photos}
            onBulletUpdate={HeaderBulletUpdate}
          />

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
                  <DatePeriod>{rentDate?.start}</DatePeriod>
                </DateContainer>
                <Feather
                  name="chevron-right"
                  size={15}
                  color={theme.COLORS["gray-400"]}
                />
                <DateContainer>
                  <DateText>ATÈ</DateText>
                  <DatePeriod>{rentDate?.end}</DatePeriod>
                </DateContainer>
              </PeriodToRent>
              <Invoice>
                <InvoiceText>total</InvoiceText>
                <InvoiceContainer>
                  <RentalDaily>
                    R${car.rent.price} x {markedDates.length} diárias
                  </RentalDaily>
                  <Total>R$ {car.rent.price * markedDates.length}</Total>
                </InvoiceContainer>
              </Invoice>
            </RendDetails>
          </BodyContent>
          <ButtonContainer>
            <Button
              styleButton="GREEN"
              title="Alugar agora"
              onPress={handleRentNow}
              disabled={isSubmitting}
              isLoading={isSubmitting}
            />
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}
