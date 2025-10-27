import Fretboard from "./Fretboard.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const strings = ["e", "A", "D", "G", "B", "E"];
  const content = [
    "--------------------------------",
    "--------------------------------",
    "--------------------------------",
    "--------------------------------",
    "--------------------------------",
    "0-3-5--0-3-65---0-3-5--3-0------",
  ];

  const [bpm, setBpm] = useState(120);

  const bpmDecrease = () => {
    setBpm(bpm-1);
  }

    const bpmIncrease = () => {
    setBpm(bpm+1);
  }

  return (
    <div className="master">
      <h1>Welcome to ez-tab!</h1>
      <div className="controls">
        <div className="bpm-controls">
          <button onClick={bpmIncrease}>+</button>
          <p>{bpm}</p>
          <button onClick={bpmDecrease}>-</button>
        </div>
      </div>
      <div className="fretboard-container">
        <Fretboard strings={strings} content={content} />
      </div>
    </div>
  );
}

export default App;
