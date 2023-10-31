import { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Arrow from "@/assets/arrow.svg";
import { useTheme } from "styled-components/native";
import { CalendarScheduling, MarkedDateProps } from "@/components/Calendar";
import { DayProps } from "@/components/Calendar";
import isBefore from "date-fns/isBefore";
import { getInterval } from "@/components/Calendar/getInterval";
import { StatusBar } from "react-native";
import { Button } from "@/components/Button";
import * as NavigationBar from "expo-navigation-bar";
import { format } from "date-fns";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  BackButtonHeader,
  Header,
  BackButton,
  Title,
  Period,
  StartRent,
  StartRentText,
  EndRent,
  EndRentText,
  PeriodRentInput,
  CalendarContainer,
  ButtonContainer,
} from "./styles";

type DayPress = {
  startDate: String;
  endDate: String;
};

type Params = {
  carId: string;
};

export function Scheduling() {
  const theme = useTheme();
  const [date, setDate] = useState<DayPress>({
    endDate: "",
    startDate: "",
  });
  const [lastSelected, setLastSelected] = useState<DayProps>();
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );

  const navigation = useNavigation();

  const route = useRoute();
  const { carId } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  function handleConfirm() {
    navigation.navigate("ResumeRent", {
      carId,
      markedDates: Object.keys(markedDate),
    });
  }

  function handleDayPress(day: DayProps) {
    let start = lastSelected?.timestamp ? lastSelected : day;
    let end = day;

    if (isBefore(day.timestamp, start.timestamp)) {
      start = end;
      end = start;
    }

    setLastSelected(day);
    const interval = getInterval({ startDate: start, endDate: end });
    let firstDay = Object.keys(interval)[0];
    let finalDay = Object.keys(interval)[Object.keys(interval).length - 1];
    setDate(() => {
      return {
        startDate: format(new Date(firstDay), "dd/MM/yyyy"),
        endDate: format(new Date(finalDay), "dd/MM/yyyy"),
      };
    });
    setMarkedDate(interval);
  }

  useEffect(() => {
    async function navBar() {
      await NavigationBar.setBackgroundColorAsync(theme.COLORS.white);
      await NavigationBar.setButtonStyleAsync("dark");
    }

    navBar();
  }, []);

  return (
    <Container>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent
      />
      <Header>
        <BackButtonHeader>
          <BackButton onPress={handleBack}>
            <MaterialIcons
              name="chevron-left"
              color={theme.COLORS.white}
              size={24}
            />
          </BackButton>
        </BackButtonHeader>
        <Title>
          Escolha uma{"\n"}data de início e {"\n"}fim do aluguel
        </Title>
        <Period>
          <StartRent>
            <StartRentText>DE</StartRentText>
            <PeriodRentInput value={String(date?.startDate)} />
          </StartRent>
          <Arrow />
          <EndRent>
            <EndRentText>ATÉ</EndRentText>
            <PeriodRentInput value={String(date?.endDate)} />
          </EndRent>
        </Period>
      </Header>
      <CalendarContainer>
        <CalendarScheduling
          onDayPress={handleDayPress}
          markedDates={markedDate}
        />
      </CalendarContainer>
      <ButtonContainer>
        <Button
          title="Confirmar"
          styleButtom="RED"
          disabled={date.startDate === ""}
          onPress={handleConfirm}
        />
      </ButtonContainer>
    </Container>
  );
}
