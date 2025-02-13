import React from "react";
import { useStateContext } from "../context/myContext";

const CountShow2 = () => {
  const { count, setCount, name } = useStateContext();

  return (
    <div className="count-show2">
      <p> {count}</p>
      <p>{name}</p>
      This is count component two
      <button onClick={() => setCount((count) => count + 1)}>
        Increment {count}
      </button>
    </div>
  );
};

export default CountShow2;
