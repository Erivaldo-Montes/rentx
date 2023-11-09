import { Container, CardsList } from "./styles";
import { HomeHeader } from "@/components/HomeHeader";
import { FlatList, StatusBar } from "react-native";
import { CarCard } from "@/components/CarCard";
import { useCallback, useState } from "react";
import { CarDto } from "@/DTOs/Car";
import { axios } from "@/services/api";
import { useFocusEffect } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import { Loading } from "@/components/Loading";
import Toast from "react-native-toast-message";
import { AppError } from "@/utils/AppError";

export function Home() {
  const [cars, setCars] = useState<CarDto[]>();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchCars() {
    try {
      setIsLoading(true);
      const response = await axios.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.log(error);
      const isAppError = error instanceof AppError;
      const text1 = isAppError
        ? error.message
        : "Não foi possível obter os carros";
      Toast.show({
        text1,
        position: "top",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchCars();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      async function navBar() {
        await NavigationBar.setBackgroundColorAsync("#f4f5f6");
        await NavigationBar.setButtonStyleAsync("dark");
      }

      navBar();
    }, [])
  );

  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {!isLoading ? (
        <>
          <HomeHeader />
          <CardsList>
            <FlatList
              data={cars}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 150 }}
              renderItem={({ item }) => <CarCard car={item} />}
            />
          </CardsList>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
