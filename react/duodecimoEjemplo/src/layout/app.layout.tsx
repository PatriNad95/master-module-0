import { AuthContext } from "@/core/providers";
import React, { PropsWithChildren } from "react";

export const AppLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { user } = React.useContext(AuthContext);
  return (
    <div className="layout-app-container">
      <div className="layout-app-header">
        <div>My Application</div>
        <div>User: {user}</div>
      </div>
      <main>{children}</main>
    </div>
  );
};
