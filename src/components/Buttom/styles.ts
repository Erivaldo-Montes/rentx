import styled, { css } from "styled-components/native";

interface Props {
  styleButtom: "WHITE" | "GREEN" | "RED";
}

export const Container = styled.TouchableOpacity<Props>`
  ${(props) => {
    switch (props.styleButtom) {
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

  width: 100%;
  height: 56px;
  align-items: center;

  justify-content: center;
`;

export const Text = styled.Text<Props>`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => {
    if (props.styleButtom === "GREEN" || props.styleButtom === "RED") {
      return props.theme.COLORS.white;
    }
    if (props.styleButtom === "WHITE") {
      return props.theme.COLORS["gray-700"];
    }
  }};
`;
