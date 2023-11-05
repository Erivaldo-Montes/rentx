import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "@/utils/metrics";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.COLORS["gray-900"]};
  padding: ${verticalScale(25)}px ${horizontalScale(25)}px
    ${verticalScale(34)}px ${horizontalScale(25)}px;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  font-size: ${(props) => props.theme.FONT_SIZE["3XL"]}px;
  color: ${(props) => props.theme.COLORS.white};
  line-height: ${(props) => props.theme.LINE_HEIGH["leading-7"]}px;
  margin-top: ${getStatusBarHeight() + verticalScale(30)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-regular"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS.white};
  line-height: ${(props) => props.theme.LINE_HEIGH["leading-6"]}px;

  margin-top: ${verticalScale(16)}px;
`;

export const Content = styled.View`
  padding: 0 ${horizontalScale(16)}px;
  background: ${(props) => props.theme.COLORS["gray-100"]};
  flex: 1;
`;

export const Appointments = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${verticalScale(25)}px;
`;

export const AppointmentsTitle = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS["gray-500"]};
`;

export const AppointmentsQuantity = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS["gray-700"]};
`;

export const RentedCarCard = styled.View``;

export const FooterCarCard = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 2px;

  padding: ${verticalScale(15)}px ${horizontalScale(24)}px;
  background-color: ${(props) => props.theme.COLORS.white};
`;

export const FooterText = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  color: ${(props) => props.theme.COLORS["gray-400"]};
  margin-right: auto;
`;

export const DateRental = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  color: ${(props) => props.theme.COLORS["gray-700"]};
`;
