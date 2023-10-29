import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "@/utils/metrics";

export const Container = styled.View`
  padding: 0 ${horizontalScale(24)}px;
  background-color: ${(props) => props.theme.COLORS["gray-100"]};
`;

export const FormTitle = styled.Text`
  margin-bottom: ${verticalScale(16)}px;

  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xl}px;
  color: ${(props) => props.theme.COLORS["gray-900"]};
`;

export const Form = styled.View`
  gap: ${horizontalScale(8)}px;
  margin-bottom: ${verticalScale(32)}px;
`;

export const ErrorMessageText = styled.Text`
  color: ${(props) => props.theme.COLORS["red-600"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-bold"]};
`;
