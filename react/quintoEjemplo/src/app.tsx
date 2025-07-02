import React from "react";

export const App = () => {
  const divRef = React.useRef<HTMLDivElement>(); // Create a ref to access the div element

  const [width, setWidth] = React.useState<number>(); // State to hold the width of the div

  React.useEffect(() => {
    // This effect runs after the component mounts
    setWidth(divRef.current.clientWidth); // Set the width state to the div's offsetWidth
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      {/* Use the ref to access the div */}
      <div ref={divRef} style={{ backgroundColor: "indianred" }}>
        <h1>Hello Lemoncoders</h1>
        <p>Box width: {width}</p>
      </div>
    </>
  );
};
