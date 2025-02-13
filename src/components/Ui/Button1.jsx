import React from "react";

const Buton = ({ name = "hello button" }) => {
  return (
    <div>
      <button className="button-desing">{name}</button>
    </div>
  );
};

export default Buton;
