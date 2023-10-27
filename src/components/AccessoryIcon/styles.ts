import styled from "styled-components/native";

export const Container = styled.View`
  width: 109px;
  height: 92px;

  align-items: center;
  justify-content: center;

  margin-bottom: 8px;

  background-color: ${(props) => props.theme.COLORS["gray-100"]};
`;

export const Name = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-medium"]};
  color: ${(props) => props.theme.COLORS["gray-500"]};

  margin-top: 14px;
`;
