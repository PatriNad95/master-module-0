import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const useUserList = () => {
  //Custom hook to fetch users
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [filterDebounced] = useDebounce(filter, 500);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${filterDebounced}`
    )
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, [filterDebounced]);

  return { filter, setFilter, users };
};
