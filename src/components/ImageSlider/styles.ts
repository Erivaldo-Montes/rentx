import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { verticalScale } from "@/utils/metrics";

const WIDTH_SCREEN = Dimensions.get("window").width;
export const Container = styled.View``;

export const Image = styled.Image`
  object-fit: contain;
  width: 100%;
  height: ${verticalScale(132)}px;
`;

export const ImageView = styled.View`
  width: ${WIDTH_SCREEN}px;
`;
