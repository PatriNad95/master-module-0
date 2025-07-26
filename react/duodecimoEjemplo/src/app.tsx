import React from "react";
import { AppRouter } from "@/router";
import { AuthProvider } from "@/core/providers";
import { LoginPage } from "./scenes";

export const App = () => {
  return (
    <AuthProvider Login={<LoginPage />}>
      <AppRouter />
    </AuthProvider>
  );
};
