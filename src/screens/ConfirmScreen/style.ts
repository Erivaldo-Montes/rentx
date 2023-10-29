import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { horizontalScale, verticalScale } from "@/utils/metrics";
export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.COLORS["gray-900"]};
  align-items: center;
`;

export const ImageView = styled.View`
  margin-top: ${getStatusBarHeight() + verticalScale(66)}px;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  font-size: ${(props) => props.theme.FONT_SIZE["3XL"]}px;
  color: ${(props) => props.theme.COLORS["gray-200"]};

  margin-top: ${verticalScale(46)}px;
`;

export const SuccessIconView = styled.View`
  width: ${horizontalScale(80)}px;
  height: ${verticalScale(80)}px;
  margin-top: ${verticalScale(46)}px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  width: ${horizontalScale(80)}px;
  height: ${verticalScale(56)}px;
  margin-top: ${verticalScale(105)}px;
  background-color: ${(props) => props.theme.COLORS["gray-800"]};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-medium"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  color: ${(props) => props.theme.COLORS.white};
`;

export const Message = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-regular"]};
  font-size: ${(props) => props.theme.FONT_SIZE.sm}px;
  line-height: ${(props) => props.theme.LINE_HEIGH["leading-6"]}px;
  color: ${(props) => props.theme.COLORS["gray-400"]};
  text-align: center;

  margin-top: ${verticalScale(25)}px;
`;
