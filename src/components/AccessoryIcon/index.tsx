import { Container, Name } from "./styles";
import { iconAccessories } from "@/utils/accessoriesIcons";
import React from "react";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components/native";
interface Props {
  type: string;
  name: string;
}

export function AccessoryIcon({ name, type }: Props) {
  const THEME = useTheme();
  const TypeMotor: React.FC<SvgProps> = () => {
    return iconAccessories({
      type,
      height: 28,
      width: 28,
      fill: THEME.COLORS["gray-700"],
    });
  };
  return (
    <Container>
      <TypeMotor />
      <Name>{name}</Name>
    </Container>
  );
}
