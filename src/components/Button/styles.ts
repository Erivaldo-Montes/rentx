import styled, { css } from "styled-components/native";
import { verticalScale } from "@/utils/metrics";

interface Props {
  styleButton: "WHITE" | "GREEN" | "RED";
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  ${(props) => {
    switch (props.styleButton) {
      case "GREEN":
        return css`
          background-color: ${props.theme.COLORS["green-600"]};
        `;
      case "RED":
        return css`
          background-color: ${props.theme.COLORS["red-600"]};
        `;

      case "WHITE":
        return css`
          background-color: ${props.theme.COLORS.white};
        `;
    }
  }};

  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  width: 100%;
  height: ${verticalScale(56)}px;
  align-items: center;

  justify-content: center;
`;

export const Text = styled.Text<Props>`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => {
    if (props.styleButton === "GREEN" || props.styleButton === "RED") {
      return props.theme.COLORS.white;
    }
    if (props.styleButton === "WHITE") {
      return props.theme.COLORS["gray-700"];
    }
  }};
`;
