import { MaterialIcons } from "@expo/vector-icons";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";

interface Props extends BorderlessButtonProps {
  color: string;
}

export function BackButton({ color, ...rest }: Props) {
  return (
    <BorderlessButton
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 24,
        width: 24,
      }}
      {...rest}
    >
      <MaterialIcons name="chevron-left" color={color} size={24} />
    </BorderlessButton>
  );
}
