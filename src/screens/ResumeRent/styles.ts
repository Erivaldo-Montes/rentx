import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.white};
`;

export const Header = styled.View`
  overflow: hidden;
`;

export const BodyContent = styled.View`
  flex: 1;
  padding: 0 16px;
  margin-top: 35px;
`;
export const Detail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
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
  margin-top: 16px;
`;

export const RendDetails = styled.View`
  padding: 0 20px;
`;

export const PeriodToRent = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 40px;

  padding-bottom: 16px;

  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.COLORS["gray-200"]};
`;
export const CalendarIcon = styled.View`
  background-color: ${(props) => props.theme.COLORS["red-600"]};
  padding: 12px;
`;

export const DateContainer = styled.View`
  margin: 0 30px;
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
  margin-top: 16px;
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
  padding: 24px 24px 8px 24px;
`;
