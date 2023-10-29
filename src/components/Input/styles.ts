import styled, { css } from "styled-components/native";
import { horizontalScale, verticalScale } from "@/utils/metrics";
interface Props {
  isFocused: boolean;
  isError: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: ${verticalScale(56)}px;
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
  ${(props) => {
    if (props.isError) {
      return css`
        border-color: ${props.theme.COLORS["red-600"]};
      `;
    }
  }}
`;

export const IconContainer = styled.View`
  background-color: ${(props) => props.theme.COLORS.white};
  height: 100%;
  width: ${horizontalScale(56)}px;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.TextInput`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.white};
  padding: 0 ${horizontalScale(23)}px;
  margin-left: 2px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS["gray-700"]};
`;
