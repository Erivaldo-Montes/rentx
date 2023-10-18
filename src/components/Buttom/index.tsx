import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  styleButtom: "WHITE" | "GREEN" | "RED";
}

export function Buttom({ title, styleButtom, ...rest }: Props) {
  return (
    <Container styleButtom={styleButtom} {...rest}>
      <Text styleButtom={styleButtom}>{title}</Text>
    </Container>
  );
}
