import React from "react";

interface User {
  username: string;
  lastname: string;
  fullname: string;
}

enum Actions {
  SET_USERNAME,
  SET_LASTNAME,
  RESET,
}

interface Action {
  type: Actions;
  payload: any;
}

const userReducer = (state: User, action: Action): User => {
  switch (action.type) {
    case Actions.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
        fullname: `${action.payload} ${state.lastname}`,
      };
    case Actions.SET_LASTNAME:
      return {
        ...state,
        lastname: action.payload,
        fullname: `${state.username} ${action.payload}`,
      };
    case Actions.RESET:
      return {
        username: "",
        lastname: "",
        fullname: "",
      };
    default:
      return state;
  }
};

export const App = () => {
  const [user, dispatch] = React.useReducer(userReducer, {
    username: "John",
    lastname: "Doe",
    fullname: "John Doe",
  });

  return (
    <>
      <h1>Fullname: {user.fullname}</h1>
      <input
        value={user.username}
        onChange={(e) =>
          dispatch({ type: Actions.SET_USERNAME, payload: e.target.value })
        }
      />
      <input
        value={user.lastname}
        onChange={(e) =>
          dispatch({ type: Actions.SET_LASTNAME, payload: e.target.value })
        }
      />
    </>
  );
};
