import {
  Container,
  CarDetails,
  CarImage,
  CarInfos,
  Brand,
  CarName,
  Infos,
  RentalPrice,
  Period,
  Price,
  Type,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { CarDto } from "@/DTOs/Car";
import { useTheme } from "styled-components/native";
import { iconAccessories } from "@/utils/accessoriesIcons";

interface Props {
  car: CarDto;
}

export function CarCard({ car }: Props) {
  const THEME = useTheme();
  const navigation = useNavigation();
  const TypeMotor = () =>
    iconAccessories({ type: car.fuel_type, fill: THEME.COLORS["gray-400"] });
  function handleCarDetail() {
    navigation.navigate("CarDetails", { carId: car.id });
  }

  return (
    <Container onPress={handleCarDetail}>
      <CarDetails>
        <CarInfos>
          <Brand>{car.brand}</Brand>
          <CarName>{car.name}</CarName>
          <Infos>
            <RentalPrice>
              <Period>{car.rent.period}</Period>
              <Price>R$ {car.rent.price}</Price>
            </RentalPrice>
            <TypeMotor />
          </Infos>
        </CarInfos>
        <CarImage
          source={{
            uri: car.thumbnail,
          }}
        />
      </CarDetails>
    </Container>
  );
}
