import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "@/screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "@/screens/SignUp/SignUpSecondStep";
import { ConfirmScreen } from "@/screens/ConfirmScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signUpSecondStep" component={SignUpSecondStep} />
      <Screen name="confirmScreen" component={ConfirmScreen} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUpFirstStep" component={SignUpFirstStep} />
    </Navigator>
  );
}
