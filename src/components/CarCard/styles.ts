import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.COLORS.white};
  margin-top: 16px;
`;

export const CarDetails = styled.View`
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CarImage = styled.Image`
  height: 92px;
  width: 160px;
  object-fit: contain;
`;

export const CarInfos = styled.View``;

export const Brand = styled.Text`
  color: ${(props) => props.theme.COLORS["gray-400"]};
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xss}px;
  text-transform: uppercase;
`;

export const CarName = styled.Text`
  color: ${(props) => props.theme.COLORS["gray-700"]};
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  margin-bottom: 16px;
`;
export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
`;

export const Period = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.xss}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  color: ${(props) => props.theme.COLORS["gray-400"]};
`;

export const Price = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  color: ${(props) => props.theme.COLORS["red-600"]};
`;

export const RentalPrice = styled.View``;

export const Type = styled.View``;
