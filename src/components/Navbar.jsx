import React, { useContext } from "react";
import { useStateContext } from "../context/myContext";

const Navbar = () => {
  const { count, setCount, name } = useStateContext();

  return (
    <div className="navbar">
      <p>Home 1</p>
      <p>Home 1</p>
      <p>Home 1</p>
      <p>count: {count}</p>
      <p>User Name: {name}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};

export default Navbar;
