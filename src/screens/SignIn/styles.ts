import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { horizontalScale, verticalScale } from "@/utils/metrics";

export const Container = styled.View`
  padding: 0 ${horizontalScale(24)}px;
  background-color: ${(props) => props.theme.COLORS["gray-100"]};
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE["4XL"]}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  color: ${(props) => props.theme.COLORS["gray-900"]};
  padding: 8px;
  margin-top: ${getStatusBarHeight() + verticalScale(100)}px;
`;

export const Subtitle = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  color: ${(props) => props.theme.COLORS["gray-500"]};
  line-height: ${(props) => props.theme.LINE_HEIGH["leading-6"]}px;
  padding: ${verticalScale(8)}px ${horizontalScale(8)}px;
  margin-bottom: ${verticalScale(64)};
`;

export const Form = styled.View`
  margin-bottom: ${verticalScale(64)}px;
  gap: ${verticalScale(8)}px;
`;

export const Buttons = styled.View`
  gap: 8px;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-bottom: ${verticalScale(60)}px;
  width: 100%;
`;

export const ErrorMessageText = styled.Text`
  color: ${(props) => props.theme.COLORS["red-600"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-bold"]};
`;
