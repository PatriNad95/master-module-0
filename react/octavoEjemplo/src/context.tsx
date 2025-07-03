import React from "react";

export const TitleContext = React.createContext(undefined);

export const TitleProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [title] = React.useState("Default Title");
  return (
    <TitleContext.Provider value={{ title }}>{children}</TitleContext.Provider>
  );
};
