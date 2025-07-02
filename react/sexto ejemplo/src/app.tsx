import React from "react";

export const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      console.log("Timeout executed", { count }); // Log the count value when the timeout executes
      // Note: This will log the count value at the time the timeout was set, not the current count value
      setCount((prevState) => prevState + 1);
    }, 4000); // Increment count every 4 seconds

    setCount(count + 1); // Increment count immediately on mount
  }, []);

  return <>Count: {count}</>;
};
