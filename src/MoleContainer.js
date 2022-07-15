import React from "react";
import { useState } from "react";
import EmptySlot from "./EmptySlot";
import Mole from "./Mole";
import "./App.css";

const MoleContainer = (props) => {
  let [Hill, setHill] = useState(true);

  const emptyClick = (e) => {
    props.setScore(props.score - 7);
  };

  const moleClick = (e) => {
    props.setScore(props.score + 2);
    setHill(false);
  };

  let display = Hill ? (
    <Mole
      setScore={props.setScore}
      score={props.score}
      moleClick={moleClick}
      setHill={setHill}
    />
  ) : (
    <EmptySlot
      setScore={props.setScore}
      score={props.score}
      emptyClick={emptyClick}
      setHill={setHill}
    />
  );

  return <div className="Grid">{display}</div>;
};

export default MoleContainer;
