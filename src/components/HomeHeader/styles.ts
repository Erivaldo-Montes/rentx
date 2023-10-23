import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 39px 16px 32px 16px;
  background: ${(props) => props.theme.COLORS["gray-900"]};
`;

export const HeaderText = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS["gray-500"]};
`;
