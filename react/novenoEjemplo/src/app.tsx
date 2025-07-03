import React from "react";

export const App = () => {
  const [count, setCount] = React.useState(0);
  const [userName, setUsername] = React.useState("John");
  const [lastname, setLastname] = React.useState("Doe");

  const user = React.useMemo(
    () => ({
      username: userName,
      lastname: lastname,
    }),
    [userName, lastname]
  );

  const handleReset = React.useCallback(() => {
    setUsername("");
    setLastname("");
  }, []);

  return (
    <>
      <h1>Hello Lemoncoders</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <Demo user={user} onReset={handleReset} />
      {/* <Nota value={count} /> */}
    </>
  );
};

// interface NotaProps {
//   value: number;
// }

// const Nota: React.FC<NotaProps> = React.memo(
//   (props) => {
//     const { value } = props;
//     const nota = value > 5 ? "Aprobado" : "Reprobado";
//     console.log("Nota component rendered");

//     return <h3>Nota: {nota}</h3>;
//   },
//   (prevProps, nextProps) => {
//     const prevNota = prevProps.value > 5 ? "Aprobado" : "Reprobado";
//     const nextNota = nextProps.value > 5 ? "Aprobado" : "Reprobado";
//     return prevNota === nextNota;
//   }
// );

interface Props {
  user: {
    username: string;
    lastname: string;
  };
  onReset: () => void;
}

const Demo: React.FC<Props> = React.memo((props) => {
  const { user, onReset } = props;
  console.log("Demo component rendered");

  return (
    <h2>
      Hello {user.username} {user.lastname}
      <button onClick={() => onReset()}> Reset </button>
    </h2>
  );
});
