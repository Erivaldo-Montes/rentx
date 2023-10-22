import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 24px;
  background-color: ${(props) => props.theme.COLORS["gray-100"]};
`;

export const FormTitle = styled.Text`
  margin-bottom: 16px;

  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xl}px;
  color: ${(props) => props.theme.COLORS["gray-900"]};
`;

export const Form = styled.View`
  gap: 8px;
  margin-bottom: 32px;
`;

export const ErrorMessageText = styled.Text`
  color: ${(props) => props.theme.COLORS["red-600"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-bold"]};
`;
