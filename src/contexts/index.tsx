import { AuthProvider } from "@/contexts/Auth";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
