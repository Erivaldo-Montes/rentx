import { NavigationContainer } from "@react-navigation/native";
import { AuthRoute } from "./auth.routes";
import { AppStack } from "./appStack.routes";
import { useAuth } from "@/hooks/auth";

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthRoute />}
    </NavigationContainer>
  );
}
