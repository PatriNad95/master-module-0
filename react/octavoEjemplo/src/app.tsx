import React from "react";

export const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>Hello Lemoncoders</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <Demo fullname="John Doe" />
    </>
  );
};

interface Props {
  fullname: string;
}

const Demo: React.FC<Props> = React.memo((props) => {
  const { fullname } = props;
  console.log("Demo component rendered");

  return <h2>Hello {fullname}</h2>;
});
