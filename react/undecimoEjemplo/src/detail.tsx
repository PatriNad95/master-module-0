import React from "react";
import { Link } from "react-router-dom";

export const Detail: React.FC = () => {
  return (
    <>
      <h2>Welcome to the Detail</h2>
      <Link to="/list">Comeback to list</Link>
    </>
  );
};
