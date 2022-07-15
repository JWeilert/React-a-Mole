import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import MoleContainer from "./MoleContainer";

const color = {
  color: "blue",
};

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 10; i++) {
      hills.push(<MoleContainer setScore={setScore} score={score} />);
    }
    return <div>{hills}</div>;
  };
  return (
    <div className="Title">
      <div className="Top">
        <h1>React-a-Mole!</h1>
        {score}
      </div>
      {createMoleHill()}
    </div>
  );
}

export default App;
