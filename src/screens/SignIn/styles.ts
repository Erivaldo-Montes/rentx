import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
export const Container = styled.View`
  padding: 0 24px;
  background-color: ${(props) => props.theme.COLORS["gray-100"]};
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE["4XL"]}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  color: ${(props) => props.theme.COLORS["gray-800"]};
  padding: 8px;
  margin-top: ${getStatusBarHeight() + 100}px;
`;

export const Subtitle = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  color: ${(props) => props.theme.COLORS["gray-500"]};
  line-height: ${(props) => props.theme.LINE_HEIGH["leading-6"]}px;
  padding: 8px;
  margin-bottom: 64px;
`;

export const Form = styled.View`
  margin-bottom: 64px;
  gap: 8px;
`;

export const Buttons = styled.View`
  gap: 8px;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-bottom: 60px;
  width: 100%;
`;

export const ErrorMessageText = styled.Text`
  color: ${(props) => props.theme.COLORS["red-600"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-bold"]};
`;
