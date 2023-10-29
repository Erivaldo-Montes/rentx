import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "@/utils/metrics";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.white};
`;

export const Header = styled.View`
  overflow: hidden;
`;

export const BodyContent = styled.View`
  flex: 1;
  padding: 0 ${horizontalScale(16)}px;
  margin-top: ${verticalScale(35)}35px;
`;
export const Detail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${horizontalScale(16)}px;
`;

export const Brand = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.xss}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  color: ${(props) => props.theme.COLORS["gray-400"]};
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const Name = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.base}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  color: ${(props) => props.theme.COLORS["gray-700"]};
`;

export const Period = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.xss}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  color: ${(props) => props.theme.COLORS["gray-400"]};
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.base}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  color: ${(props) => props.theme.COLORS["red-600"]};
`;

export const Description = styled.View``;

export const Rent = styled.View``;

export const Accessories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: ${verticalScale(16)}px;
`;

export const RendDetails = styled.View`
  padding: 0 ${horizontalScale(20)}px;
`;

export const PeriodToRent = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${verticalScale(40)}px;

  padding-bottom: ${verticalScale(16)}px;

  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.COLORS["gray-200"]};
`;
export const CalendarIcon = styled.View`
  background-color: ${(props) => props.theme.COLORS["red-600"]};
  padding: ${verticalScale(12)}px ${horizontalScale(12)}px;
`;

export const DateContainer = styled.View`
  margin: 0 ${horizontalScale(20)}px;
`;

export const DateText = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xss}px;
  color: ${(props) => props.theme.COLORS["gray-400"]};
  letter-spacing: 0.4px;
`;

export const DatePeriod = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS["gray-700"]};
`;

export const Invoice = styled.View`
  margin-top: ${verticalScale(16)}px ${horizontalScale(16)}px;
`;

export const InvoiceContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InvoiceText = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xss}px;
  color: ${(props) => props.theme.COLORS["gray-400"]};
  letter-spacing: 0.4px;
  text-transform: uppercase;
  width: 100%;
`;

export const RentalDaily = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS["gray-700"]};
`;

export const Total = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.base}px;
  color: ${(props) => props.theme.COLORS["green-600"]};
`;

export const ButtonContainer = styled.View`
  background-color: ${(props) => props.theme.COLORS["gray-100"]};
  padding: ${verticalScale(24)}px ${horizontalScale(24)}px ${verticalScale(8)}px
    ${horizontalScale(24)}px;
`;
