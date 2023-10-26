import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "@/screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "@/screens/SignUp/SignUpSecondStep";
import { ConfirmScreen } from "@/screens/ConfirmScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="ConfirmScreen" component={ConfirmScreen} />
    </Navigator>
  );
}
