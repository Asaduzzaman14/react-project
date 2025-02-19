import React from "react";
import { useSelector } from "react-redux";
const Footer = () => {
  const counts = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>This is footer</h2>
      {counts}
    </div>
  );
};

export default Footer;
