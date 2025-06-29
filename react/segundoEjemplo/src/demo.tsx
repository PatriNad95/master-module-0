import React from "react";

interface Person {
  name: string;
  surname: string;
}

export const Demo: React.FC = () => {
  // This is a simple example of using React state with an interface
  //   const [person, setPerson] = React.useState<Person>({
  //     name: "John",
  //     surname: "Doe",
  //   });
  //   return (
  //     <>
  //       <h4>
  //         {person.name} - {person.surname}
  //       </h4>
  //       <input
  //         type="text"
  //         value={person.name}
  //         onChange={(e) => setPerson({ ...person, name: e.target.value })}
  //       />
  //       <input
  //         type="text"
  //         value={person.surname}
  //         onChange={(e) => setPerson({ ...person, surname: e.target.value })}
  //       />
  //     </>
  //   );

  const [visible, setVisible] = React.useState(false);
  return (
    <>
      Toggle
      <input
        type="checkbox"
        checked={visible}
        onChange={(e) => setVisible(e.target.checked)}
      />
      {visible && <ChildComponent />}
    </>
  );
};

const ChildComponent: React.FC = () => {
  React.useEffect(() => {
    console.log("Child component mounted");
    return () => {
      console.log("Child component unmounted");
    };
  }, []);
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
};
