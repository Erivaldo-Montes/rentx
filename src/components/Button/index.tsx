import { Container, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { Loading } from "@/components/Loading";
import { theme } from "@/theme";

interface Props extends TouchableOpacityProps {
  title: string;
  styleButton: "WHITE" | "GREEN" | "RED";
  isLoading?: boolean;
}

export function Button({
  title,
  styleButton,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <Container styleButton={styleButton} {...rest}>
      {isLoading ? (
        <Loading color={theme.COLORS.white} />
      ) : (
        <>
          <Text styleButton={styleButton}>{title}</Text>
        </>
      )}
    </Container>
  );
}
