import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";

interface BulletProps {
  isActive: boolean;
}

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-bottom: 60px;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const StepVisualization = styled.View`
  gap: 8px;
  flex-direction: row;
`;

export const Bullet = styled.View<BulletProps>`
  height: 4px;
  width: 4px;

  border-radius: 999px;

  background: ${(props) =>
    props.isActive
      ? props.theme.COLORS["gray-700"]
      : props.theme.COLORS["gray-400"]};
`;
