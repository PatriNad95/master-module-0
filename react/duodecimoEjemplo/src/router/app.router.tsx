import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, ListPage, DetailPage } from "@/scenes";
import { switchRoutes } from "./routes";
import { AppLayout } from "@/layout";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route
          path="*"
          element={
            <AppLayout>
              <Routes>
                <Route path={switchRoutes.list} element={<ListPage />} />
                <Route path={switchRoutes.detail} element={<DetailPage />} />
              </Routes>
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
};
