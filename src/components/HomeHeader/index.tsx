import { Container, HeaderText } from "./styles";
import LogoSvg from "@/assets/logo.svg";

export function HomeHeader() {
  return (
    <Container>
      <LogoSvg height={12} />
      <HeaderText>Total de 12 carros</HeaderText>
    </Container>
  );
}
