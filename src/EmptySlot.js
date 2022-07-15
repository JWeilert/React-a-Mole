import { useEffect } from "react";
import React from "react";
import molehill from "./Images/molehill.png";

const EmptySlot = (props) => {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.setHill(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "20vw" }}
        src={molehill}
        onClick={props.emptyClick}
      />
    </div>
  );
};

export default EmptySlot;
