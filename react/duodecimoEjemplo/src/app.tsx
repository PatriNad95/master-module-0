import React from "react";
import { AppRouter } from "@/router";
import { AuthProvider } from "@/core/providers";
import { LoginScene } from "./scenes";

export const App = () => {
  return (
    <AuthProvider Login={<LoginScene />}>
      <AppRouter />
    </AuthProvider>
  );
};
