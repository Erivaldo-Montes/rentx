import styled from "styled-components/native";
import { horizontalScale } from "@/utils/metrics";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS["gray-100"]};
`;

export const CardsList = styled.View`
  padding: 0 ${horizontalScale(16)}px;
`;
