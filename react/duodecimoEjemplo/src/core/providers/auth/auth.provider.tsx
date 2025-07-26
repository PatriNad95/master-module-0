import React, { PropsWithChildren } from "react";
import { AuthContextModel } from "./auth.vm";

export const AuthContext = React.createContext<AuthContextModel>(null);
interface Props {
  Login: React.ReactNode;
}
export const AuthProvider: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, Login } = props;
  const [user, setUser] = React.useState<string>();
  return (
    <AuthContext.Provider value={{ user, onLogin: setUser }}>
      {user ? <>{children}</> : Login}
    </AuthContext.Provider>
  );
};
