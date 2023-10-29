import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "@/utils/getResponsiveSize";

export const Container = styled.View`
  width: ${horizontalScale(109)}px;
  height: ${verticalScale(92)}px;

  align-items: center;
  justify-content: center;

  margin-bottom: ${verticalScale(8)}px;

  padding: ${verticalScale(16)}px ${horizontalScale(16)}px;

  background-color: ${(props) => props.theme.COLORS["gray-100"]};
`;

export const Name = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-medium"]};
  color: ${(props) => props.theme.COLORS["gray-500"]};

  margin-top: ${verticalScale(14)}px;
`;
