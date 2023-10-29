import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "@/utils/metrics";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: ${verticalScale(39)}px ${horizontalScale(16)}px
    ${verticalScale(32)}px ${horizontalScale(16)}px;
  background: ${(props) => props.theme.COLORS["gray-900"]};
`;

export const HeaderText = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS["gray-500"]};
`;
