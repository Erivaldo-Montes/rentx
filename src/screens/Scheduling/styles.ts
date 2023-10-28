import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.white};
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.COLORS["gray-900"]};
  padding: 25px;
`;

export const BackButtonHeader = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  font-size: ${(props) => props.theme.FONT_SIZE["3XL"]}px;
  color: ${(props) => props.theme.COLORS.white};
  line-height: ${(props) => props.theme.LINE_HEIGH["leading-7"]}px;
  margin-top: 24px;
`;

export const Period = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StartRent = styled.View``;
export const StartRentText = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE["xss"]}px;
  color: ${(props) => props.theme.COLORS["gray-500"]};
`;
export const PeriodRentInput = styled.TextInput.attrs(() => ({
  editable: false,
}))`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS.white};

  width: 104px;
  padding: 2px;

  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.COLORS["red-100"]};
`;

export const EndRent = styled.View``;

export const EndRentText = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE["xss"]}px;
  color: ${(props) => props.theme.COLORS["gray-500"]};
`;

export const CalendarContainer = styled.View`
  margin-top: 33px;
`;

export const ButtonContainer = styled.View`
  margin-top: auto;
  padding: 24px;
`;
