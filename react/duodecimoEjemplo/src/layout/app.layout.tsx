import React, { PropsWithChildren } from "react";

export const AppLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className="layout-app-container">
      <div className="layout-app-header">
        <div>My Application</div>
        <div>User Logged in</div>
      </div>
      <main>{children}</main>
    </div>
  );
};
