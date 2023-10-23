import { NavigationContainer } from "@react-navigation/native";
import { AppRoute } from "./app.route";
import { AuthRoute } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  );
}
