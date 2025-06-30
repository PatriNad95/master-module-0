import React from "react";
import { useUserList } from "./use-user-list";

export const App = () => {
  const { users, Input } = useUserList();

  return (
    <>
      <Input />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
