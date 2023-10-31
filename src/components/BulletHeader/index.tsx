import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Container, StepVisualization, Bullet } from "./styles";
import { BackButton } from "@/components/BackButton";

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
      <BackButton color={theme.COLORS["gray-500"]} onPress={handleBack} />
      <StepVisualization>
        {activeBullet.map((bullet, index) => (
          <Bullet isActive={bullet} key={index} />
        ))}
      </StepVisualization>
    </Container>
  );
}
