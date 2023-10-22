import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { Container, StepVisualization, Step } from "./styles";

interface Props {
  stepsActive: number;
}

export function SignUpHeader({ stepsActive }: Props) {
  const navigation = useNavigation();
  const steps = new Array(1, 2);

  function handleBack() {
    navigation.goBack();
  }

  const activeSteps = steps.map((_, index) => {
    if (index === stepsActive - 1) {
      return true;
    } else {
      return false;
    }
  });

  const theme = useTheme();
  return (
    <Container>
      <TouchableOpacity onPress={handleBack}>
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={theme.COLORS["gray-500"]}
        />
      </TouchableOpacity>
      <StepVisualization>
        <Step isActive={activeSteps[0]} />
        <Step isActive={activeSteps[1]} />
      </StepVisualization>
    </Container>
  );
}
