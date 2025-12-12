import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { LoginScene, ListScene } from '#scenes';
import { switchRoutes } from './routes';
import { AuthContext } from '#core/auth';
import { useApiConfig } from '#core/api';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

const PrivateRoutes = () => {
  const { userSession } = React.useContext(AuthContext); // Aquí iría el contexto de autenticación
  return userSession.userName ? (
    <Outlet />
  ) : (
    <Navigate to={switchRoutes.login} />
  );
};

const AppRoutes: React.FC = () => {
  useApiConfig();
  return (
    <Routes>
      <Route path={switchRoutes.login} element={<LoginScene />} />
      <Route element={<PrivateRoutes />}>
        <Route path={switchRoutes.list} element={<ListScene />} />
      </Route>
      <Route
        path={switchRoutes.root}
        element={<Navigate to={switchRoutes.login} />}
      />
    </Routes>
  );
};
