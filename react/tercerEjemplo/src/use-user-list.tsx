import React from "react";
import { useDebounce } from "use-debounce";

export const useUserList = () => {
  //Custom hook to fetch users
  const [filter, setFilter] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [filterDebounced] = useDebounce(filter, 500);

  React.useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${filterDebounced}`
    )
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, [filterDebounced]);

  const Input: React.FC = () => (
    <input value={filter} onChange={(e) => setFilter(e.target.value)} />
  );

  return { users, Input };
};
