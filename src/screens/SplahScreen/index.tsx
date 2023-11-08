import { Image, Text, View } from "react-native";
import Accc from "../../assets/acceleration.svg";

export function Splashscreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Accc height={510} width={510} />
    </View>
  );
}
