import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => {
  const result: number = (width / guidelineBaseWidth) * size;
  return Number(result.toFixed(2));
};
const verticalScale = (size: number) => {
  const result = (height / guidelineBaseHeight) * size;
  return Number(result.toFixed(2));
};

const moderateScale = (size: number, factor = 0.5) => {
  const result = size + (horizontalScale(size) - size) * factor;
  return Number(result.toFixed(2));
};
export { horizontalScale, verticalScale, moderateScale };
