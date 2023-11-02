import { Container, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";
interface Props extends TouchableOpacityProps {
  title: string;
  styleButton: "WHITE" | "GREEN" | "RED";
}

export function Button({ title, styleButton, ...rest }: Props) {
  return (
    <Container styleButton={styleButton} {...rest}>
      <Text styleButton={styleButton}>{title}</Text>
    </Container>
  );
}
