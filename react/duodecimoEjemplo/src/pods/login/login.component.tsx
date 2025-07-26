import React from "react";
import { createEmptyFormData } from "./login.vm";
import { FormData } from "./login.vm";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onSubmit } = props;
  const [formData, setFormData] = React.useState(createEmptyFormData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData.username, formData.password);
  };

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Hello from login page</h2>

        <div>
          <div>
            <label>Username: </label>
            <input
              value={formData.username}
              onChange={handleChange("username")}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
