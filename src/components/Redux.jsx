import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../src/store/counterSlice";
const Redux = () => {
  const counts = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      curent state value {counts}
      <div className="flex gap-4">
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>

        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Redux;
