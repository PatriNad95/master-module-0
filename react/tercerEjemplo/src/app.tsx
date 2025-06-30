import React from "react";
import { useUserList } from "./use-user-list";

export const App = () => {
  const { filter, setFilter, users } = useUserList();

  return (
    <>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
