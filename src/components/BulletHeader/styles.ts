import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/metrics";

interface BulletProps {
  isActive: boolean;
}

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + 18}px;
  width: 100%;
  margin-bottom: ${verticalScale(30)}px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const StepVisualization = styled.View`
  gap: 8px;
  flex-direction: row;
`;

export const Bullet = styled.View<BulletProps>`
  height: ${verticalScale(6)}px;
  width: ${horizontalScale(6)}px;

  border-radius: ${moderateScale(999)}px;

  background: ${(props) =>
    props.isActive
      ? props.theme.COLORS["gray-700"]
      : props.theme.COLORS["gray-400"]};
`;
