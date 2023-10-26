import { Container } from "./styles";
import { ActivityIndicator } from "react-native";
export function Loading() {
  return (
    <Container>
      <ActivityIndicator size={"large"} />
    </Container>
  );
}
