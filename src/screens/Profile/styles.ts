import styled, { css } from "styled-components/native";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/metrics";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { RectButton } from "react-native-gesture-handler";
import { Image } from "react-native";

interface MenuSelectProps {
  selected: boolean;
}

export const Container = styled.View`
  background: ${(props) => props.theme.COLORS["gray-100"]};
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.COLORS["gray-900"]};
  height: ${verticalScale(227)}px;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${horizontalScale(24)}px;
  margin-top: ${getStatusBarHeight() + 31}px;
`;

export const HeaderTopTitle = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  font-size: ${(props) => props.theme.FONT_SIZE.base}px;
  color: ${(props) => props.theme.COLORS.white};
`;

export const ProfilePhoto = styled.View`
  height: ${verticalScale(180)}px;
  width: ${horizontalScale(180)}px;
  margin: ${verticalScale(50)}px auto 0 auto;
`;

export const ImageProfile = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 90px;
  object-fit: contain;
  position: relative;
`;

export const SelectPhoto = styled(RectButton)`
  background-color: ${(props) => props.theme.COLORS["red-600"]};
  padding: ${moderateScale(8)}px;
  position: absolute;
  bottom: ${verticalScale(4)}px;
  right: ${horizontalScale(4)}px;
`;

export const SignOutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  margin-top: ${verticalScale(122)}px;
  padding: 0 ${horizontalScale(24)}px;
`;

export const Menu = styled.View`
  flex-direction: row;
  justify-content: center;
  border-color: ${(props) => props.theme.COLORS["gray-200"]};
  border-bottom-width: 1px;
`;

export const Option = styled.TouchableOpacity<MenuSelectProps>`
  align-items: center;
  justify-content: center;
  padding-bottom: ${verticalScale(14)}px;
  border-bottom-width: 1px;

  border-color: ${(props) =>
    props.selected ? props.theme.COLORS["red-600"] : "transparent"};

  margin-right: ${horizontalScale(24)}px;
`;

export const OptionText = styled.Text<MenuSelectProps>`
  font-family: ${(props) => props.theme.FONT_FAMILY["archivo-semiBold"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xl}px;
  color: ${(props) =>
    props.selected
      ? props.theme.COLORS["gray-700"]
      : props.theme.COLORS["gray-400"]};
  text-align: center;
`;

export const Form = styled.View`
  margin-top: ${verticalScale(24)}px;
  gap: ${verticalScale(8)}px;
`;

export const SaveChanges = styled.View`
  margin-top: ${verticalScale(16)}px;
`;

export const ErrorMessageText = styled.Text`
  color: ${(props) => props.theme.COLORS["red-600"]};
  font-size: ${(props) => props.theme.FONT_SIZE.xs}px;
  font-family: ${(props) => props.theme.FONT_FAMILY["inter-bold"]};
`;
