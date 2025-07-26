import { AuthContext } from "@/core/providers";
import React from "react";
import { Login } from "./login.component";
import { doLogin } from "./api";

export const LoginContainer: React.FC = () => {
  const { onLogin } = React.useContext(AuthContext);

  const handleSubmit = (username: string, password: string) => {
    doLogin(username, password).then((result) => {
      if (result) {
        onLogin(username);
      } else {
        alert("User / password not valid, psst... admin / test");
      }
    });
  };

  return (
    <>
      <Login onSubmit={handleSubmit} />
    </>
  );
};
