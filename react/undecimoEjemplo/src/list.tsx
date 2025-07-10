import React from "react";
import { Link } from "react-router-dom";

export const List: React.FC = () => {
  return (
    <>
      <h2>Welcome to the List</h2>
      <Link to="/detail">Navigate to Detail</Link>
    </>
  );
};
