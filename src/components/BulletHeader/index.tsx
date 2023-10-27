import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { Container, StepVisualization, Bullet } from "./styles";

interface Props {
  bulletActive: number;
  bulletsNumber: number;
}

export function BulletHeader({ bulletsNumber, bulletActive }: Props) {
  const navigation = useNavigation();
  const bullets = [];

  for (let i = 0; i < bulletsNumber; i++) {
    bullets.push(i);
  }

  function handleBack() {
    navigation.goBack();
  }

  const activeBullet = bullets.map((bullet) => {
    if (bullet === bulletActive - 1) {
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
        {activeBullet.map((bullet, index) => (
          <Bullet isActive={bullet} key={index} />
        ))}
      </StepVisualization>
    </Container>
  );
}
