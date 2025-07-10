import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<User>({
    username: "",
    password: "",
  });

  const handleChangeUser =
    (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [field]: e.target.value });
    };

  const handleNavigate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.username === "admin" && user.password === "test") {
      navigate("/list");
    } else {
      alert("Invalid credentials");
    }
  };

  console.log("User", user);
  return (
    <form onSubmit={handleNavigate}>
      <h2>Welcome to my project</h2>
      <div>
        Name
        <input
          type="text"
          value={user.username}
          onChange={handleChangeUser("username")}
        />
      </div>
      <br></br>
      <div>
        Password
        <input
          type="password"
          value={user.password}
          onChange={handleChangeUser("password")}
        />
      </div>
      {/* <Link to="/list">Navigate to List</Link> */}
      <div
        onClick={() => {
          console.log("Click on red square");
        }}
        style={{ background: "red", width: "100px", height: "100px" }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log("Click on grey square");
          }}
          style={{ background: "grey", width: "50px", height: "50px" }}
        ></div>
      </div>
      <button type="submit">Navigate</button>
    </form>
  );
};
