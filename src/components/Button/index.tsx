import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  styleButtom: "WHITE" | "GREEN" | "RED";
}

export function Button({ title, styleButtom, ...rest }: Props) {
  return (
    <Container styleButton={styleButtom} {...rest}>
      <Text styleButton={styleButtom}>{title}</Text>
    </Container>
  );
}
