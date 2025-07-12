import React from "react";
import { Detail } from "./detail";
import { Login } from "./login";
import { List } from "./list";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MembersProvider } from "./members.provider";

export const App: React.FC = () => (
  <>
    <h1>My example</h1>
    <MembersProvider>
      <AppRouter />
    </MembersProvider>
  </>
);

const PublicRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"*"} element={<Navigate to={"/public"} />} />
    </Routes>
  );
};

const PrivateRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={"list"} element={<List />} />
      <Route path={"detail/:id"} element={<Detail />} />
      <Route path={"*"} element={<Navigate to={"list"} />} />
    </Routes>
  );
};

const AppRouter: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/public/*"} element={<PublicRouter />} />
          <Route path={"/private/*"} element={<PrivateRouter />} />
          <Route path={"*"} element={<Navigate to={"/public"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

// const AppRouter = () => {
//   const url = window.location.pathname;
//   switch (url) {
//     case "/":
//       return <Login />;
//     case "/list":
//       return <List />;
//     case "/detail":
//       return <Detail />;
//   }
// };
