import Fretboard from "./Fretboard.jsx";
import "./App.css";

function App() {
  const strings = ["E", "A", "D", "G", "B", "E"];
  const content = [
    "--------------------------------",
    "--------------------------------",
    "--------------------------------",
    "--------------------------------",
    "--------------------------------",
    "0-3-5--0-3-65---0-3-5--3-0------",
  ];

  return (
    <div class="background">
      <h1>Welcome to ez-tab!</h1>
      <Fretboard strings={strings} content={content} />
    </div>
  );
}

export default App;
