import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
interface Props extends TouchableOpacityProps {
  color: string;
}

export function BackButton({ color, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <MaterialIcons name="chevron-left" color={color} size={24} />
    </TouchableOpacity>
  );
}
