export const doLogin = (username: string, password: string) => {
  return Promise.resolve(username === "admin" && password === "test");
};
