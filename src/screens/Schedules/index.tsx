import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  RentedCarCard,
  FooterText,
  FooterCarCard,
  DateRental,
} from "./styles";

import { axios } from "@/services/api";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { AppError } from "@/utils/AppError";
import Toast from "react-native-toast-message";
import { CarCard } from "@/components/CarCard";
import { CarDto } from "@/DTOs/Car";
import { Loading } from "@/components/Loading";
import { AntDesign } from "@expo/vector-icons";

type rentedCar = {
  car: CarDto;
  user_id: string;
  startDate: string;
  endDate: string;
  id: string;
};

export function Schedules() {
  const [rentedCar, setRentedCar] = useState<rentedCar[]>();
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  async function fetchRentedCar() {
    try {
      setIsLoading(true);
      const response = await axios.get("/schedulesByUser");
      setRentedCar(response.data);
    } catch (error) {
      console.log(error);
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não possível obter os carros alugados";

      Toast.show({
        type: "error",
        text1: title,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRentedCar();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Seus agendamentos,{"\n"}estão aqui</Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>
      <Content>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Appointments>
              <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
              <AppointmentsQuantity>{rentedCar?.length}</AppointmentsQuantity>
            </Appointments>

            <FlatList
              data={rentedCar}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <RentedCarCard>
                  <CarCard car={item.car} />
                  <FooterCarCard>
                    <FooterText>PERIODO</FooterText>
                    <DateRental>{item.startDate}</DateRental>
                    <AntDesign
                      name="arrowright"
                      size={14}
                      style={{
                        marginHorizontal: 10,
                      }}
                      color={theme.COLORS["gray-400"]}
                    />
                    <DateRental>{item.startDate}</DateRental>
                  </FooterCarCard>
                </RentedCarCard>
              )}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </Content>
    </Container>
  );
}
