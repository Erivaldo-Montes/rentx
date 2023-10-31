import { ReactNode, createContext, useState } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

interface CarContextData {
  SignIn: ({ email, password }: SignInProps) => void;
  user: string | undefined;
}

type SignInProps = {
  email: string;
  password: string;
};

export const AuthContext = createContext<CarContextData>({} as CarContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string>();
  async function SignIn({ email, password }: SignInProps) {
    setUser(email);
  }

  return (
    <AuthContext.Provider
      value={{
        SignIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
