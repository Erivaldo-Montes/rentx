import { NavigationContainer } from "@react-navigation/native";
import { AppRoute } from "./app.routes";
import { AuthRoute } from "./auth.routes";
import { AppStack } from "./appStack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
