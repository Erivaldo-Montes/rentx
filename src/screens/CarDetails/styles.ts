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
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.xss}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  color: ${(props) => props.theme.COLORS["gray-400"]};
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.base}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  color: ${(props) => props.theme.COLORS["gray-700"]};
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.xss}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  color: ${(props) => props.theme.COLORS["gray-400"]};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.base}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-medium"]};
  color: ${(props) => props.theme.COLORS["red-600"]};
`;

export const Accessories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const About = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS["gray-700"]};
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  line-height: ${(props) => props.theme.LINE_HEIGH["leading-6"]}px;
  margin-top: 24px;
  text-align: justify;
`;

export const ButtonContainer = styled.View`
  background-color: ${(props) => props.theme.COLORS["gray-100"]};
  bottom: 0;
  width: 100%;
  padding: 24px;
`;
