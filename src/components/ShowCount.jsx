import React from "react";
import CountShow2 from "./CountShow2";
import { useStateContext } from "../context/myContext";

const ShowCount = () => {
  const { count, setCount, name } = useStateContext();

  return (
    <div className="count-show1 ">
      <h2>Total count</h2>

      <p>{name}</p>
      <h3>{count}</h3>

      <CountShow2></CountShow2>
    </div>
  );
};

export default ShowCount;
