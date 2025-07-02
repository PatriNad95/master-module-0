import React from "react";

export const App = () => {
  const [count, setCount] = React.useState(0);
  const render = React.useRef(0);

  render.current += 1;

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Clicked {count}</button>
      <p>Renders: {render.current}</p>
    </>
  );
};
