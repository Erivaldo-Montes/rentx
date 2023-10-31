import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { horizontalScale, verticalScale } from "@/utils/metrics";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.white};
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.COLORS["gray-900"]};
  padding: ${verticalScale(25)}px ${horizontalScale(25)}px;
`;

export const BackButtonHeader = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  font-size: ${(props) => props.theme.FONT_SIZE["3XL"]}px;
  color: ${(props) => props.theme.COLORS.white};
  line-height: ${(props) => props.theme.LINE_HEIGH["leading-7"]}px;
  margin-top: ${verticalScale(24)}px;
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

  width: ${horizontalScale(104)}px;
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
  margin-top: ${verticalScale(33)}px;
`;

export const ButtonContainer = styled.View`
  margin-top: auto;
  padding: ${verticalScale(24)}px ${horizontalScale(24)}px;
`;
