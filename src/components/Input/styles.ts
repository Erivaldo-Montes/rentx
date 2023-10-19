import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 56px;
  flex-direction: row;
  border-width: 2px;
  border-color: transparent;
  ${(props) => {
    if (props.isFocused) {
      return css`
        border-bottom-color: ${props.theme.COLORS["red-600"]};
      `;
    }
  }}
`;

export const IconContainer = styled.View`
  background-color: ${(props) => props.theme.COLORS.white};
  height: 100%;
  width: 56px;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.TextInput`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.white};
  padding: 0 23px;
  margin-left: 2px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS["gray-700"]};
`;
