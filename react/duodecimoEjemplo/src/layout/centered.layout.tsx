import React, { PropsWithChildren } from "react";

export const CenteredLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="layout-center">{children}</div>;
};
