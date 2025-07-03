import React, { PropsWithChildren } from "react";
import { TitleContext, TitleProvider } from "./context";

const UserContext = React.createContext(undefined);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = React.useState({ surname: "Doe" });
  const { title } = React.useContext(TitleContext);

  return (
    <UserContext.Provider value={{ user, title }}>
      {children}
    </UserContext.Provider>
  );
};

export const App = () => {
  return (
    <TitleProvider>
      <UserProvider>
        <h1>Hola</h1>
        <MyChildComponent />
      </UserProvider>
    </TitleProvider>
  );
};

const MyChildComponent = () => {
  // const user = React.useContext(UserContext);
  return (
    <div style={{ border: "solid 1px black", marginTop: "50px" }}>
      ContentPage
      <MyGrandChildComponent />
    </div>
  );
};

const MyGrandChildComponent = () => {
  const { user, title } = React.useContext(UserContext);
  return (
    <div style={{ backgroundColor: "red" }}>
      Surname: {user.surname} {title}{" "}
    </div>
  );
};
