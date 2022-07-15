import { useEffect } from "react";
import mole from "./Images/mole.png";

const Mole = (props) => {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.setHill(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "20vw" }} src={mole} onClick={props.moleClick} />
    </div>
  );
};

export default Mole;
