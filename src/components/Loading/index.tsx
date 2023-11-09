import { Container } from "./styles";
import { ActivityIndicator } from "react-native";
import { theme } from "@/theme";
interface Props {
  color?: string;
}
export function Loading({ color = theme.COLORS["red-600"] }: Props) {
  return (
    <Container>
      <ActivityIndicator size={"large"} color={color} />
    </Container>
  );
}
