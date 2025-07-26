import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ListScene, DetailPage, LoginScene } from "@/scenes";
import { switchRoutes } from "./routes";
import { AppLayout } from "@/layout";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.list} />}
        />
        <Route
          path="*"
          element={
            <AppLayout>
              <Routes>
                <Route path={switchRoutes.list} element={<ListScene />} />
                <Route path={switchRoutes.detail} element={<DetailPage />} />
              </Routes>
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
};
