import { Container, CardsList } from "./styles";
import { HomeHeader } from "@/components/HomeHeader";
import { FlatList, StatusBar } from "react-native";
import { CarCard } from "@/components/CarCard";
import { useEffect, useState } from "react";
import { CarDto } from "@/DTOs/Car";
import { axios } from "@/services/api";
import * as NavigationBar from "expo-navigation-bar";

export function Home() {
  const [cars, setCars] = useState<CarDto[]>();

  async function fetchCars() {
    try {
      axios.get("/cars").then((response) => setCars(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCars();
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
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
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
    </Container>
  );
}
