import { useState } from "react";
import "./App.css";
import JsonWithWords from "./assets/words.json";
function App() {
  const [allWords, setAllWords] = useState(JsonWithWords);
  const [pickedWord, setPickedWord] = useState({ spanish: "", english: "" });
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const handlePressButton = () => {
    console.log(allWords);
    const pickedIndex = getRandomInt(allWords.length);

    setAllWords((prevWords) =>
      prevWords.filter((object, index) => {
        if (index == pickedIndex) {
          console.log("inside");
          //is the next word
          setPickedWord(object);
          //eliminate because of It can be appears again
          return false;
        }

        return true;
      })
    );
  };
  return (
    <>
      <p style={{ fontSize: "0.7em" }}>palabras restantes (remaining words):</p>
      <span style={{ fontSize: "0.7em" }}> {allWords.length}</span>
      <table>
        <tr>
          <th style={{ fontSize: "0.8em" }}>Spanish Word</th>
          <th style={{ fontSize: "0.8em" }}>English word</th>
        </tr>
        <tr>
          <th>{pickedWord.spanish}</th>
          <th>{pickedWord.english}</th>
        </tr>
      </table>
      <button style={{ fontSize: "0.8em" }} onClick={handlePressButton}>
        Next word
      </button>
    </>
  );
}

export default App;
