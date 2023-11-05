import { ReactNode, createContext, useState } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

interface CarContextData {
  user: string | undefined;
  signIn: ({ email, password }: SignInProps) => void;

  signOut: () => void;
}

type SignInProps = {
  email: string;
  password: string;
};

export const AuthContext = createContext<CarContextData>({} as CarContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string>();
  async function signIn({ email, password }: SignInProps) {
    setUser(email);
  }

  async function signOut() {
    setUser("");
  }
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
