import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarDetails } from "@/screens/CarDetails";
import { Home } from "@/screens/Home";
import { AppRoute } from "./app.routes";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={AppRoute} />
      <Screen name="CarDetails" component={CarDetails} />
    </Navigator>
  );
}
