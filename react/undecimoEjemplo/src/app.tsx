import React from "react";
import { Detail } from "./detail";
import { Login } from "./login";
import { List } from "./list";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App: React.FC = () => <AppRouter />;

const AppRouter: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/list"} element={<List />} />
          <Route path={"/detail"} element={<Detail />} />
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
