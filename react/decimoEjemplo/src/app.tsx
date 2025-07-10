import React from "react";
import { MembersProvider, UserContext } from "./members.context";
import { InputContext, InputProvider } from "./user-filter.context";

export const App: React.FC = () => (
  <InputProvider>
    <Input />
    <MembersProvider>
      <UserList />
    </MembersProvider>
  </InputProvider>
);

const UserList: React.FC = () => {
  const { users, setUsers } = React.useContext(UserContext);
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <button onClick={() => setUsers([])}>Empty Array</button>
    </>
  );
};

const Input: React.FC = () => {
  const { inputValue, setInputValue } = React.useContext(InputContext);
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
