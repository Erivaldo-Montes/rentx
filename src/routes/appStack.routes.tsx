import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarDetails } from "@/screens/CarDetails";
import { AppRoute } from "./app.routes";
import { Scheduling } from "@/screens/Scheduling";
import { ResumeRent } from "@/screens/ResumeRent";
import { ConfirmScreen } from "@/screens/ConfirmScreen";

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
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="ResumeRent" component={ResumeRent} />
      <Screen name="ConfirmScreen" component={ConfirmScreen} />
    </Navigator>
  );
}
