import { useRef, useState } from "react";
import "./App.css";
import JsonWithWords from "./assets/words.json";
import Checkbox from "./components/Checkbox";
import Rules from "./components/Rules";
function App() {
  const [allWords, setAllWords] = useState(JsonWithWords);
  const [pickedWord, setPickedWord] = useState({
    spanish: "",
    english: "",
    answer: "",
  });
  const [showEnglishWord, sethHideEnglishWord] = useState(true);
  const [showSpanishWord, setshowSpanishWord] = useState(true);
  const [alwaysShowAnswer, setAlwaysShowAnswer] = useState(false);

  const [resetPressed, setResetPressed] = useState(false);
  const [showAnswerPressed, setShowAnswerPressed] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const handleNextWordClick = () => {
    console.log(allWords);
    const pickedIndex = getRandomInt(allWords.length);

    setShowAnswerPressed(false);
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
  const handleShowAnswerClick = () => {
    setShowAnswerPressed(true);
  };

  const resetAllWords = () => {
    setAllWords(JsonWithWords);
    setResetPressed(true);
    setTimeout(() => {
      setResetPressed(false);
    }, 500);
  };
  return (
    <>
      <button onClick={resetAllWords} className={"reset-button"}>
        <svg
          width="1.7em"
          height="1.7em"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
          className={resetPressed ? "rotate-image":""}
        >
          <path
            d="M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <p style={{ textAlign: "center" }}>
        palabras restantes (remaining words):
      </p>
      <span style={{ fontWeight: "bolder" }}> {allWords.length}</span>
      <table>
        <tr>
          <th>Spanish Word</th>
          <th>English word</th>
        </tr>
        <tr>
          {/* show always the words when you want to see the solution */}
          <th>{(showSpanishWord || showAnswerPressed) && pickedWord.spanish}</th>
          <th>{(showEnglishWord || showAnswerPressed) && pickedWord.english}</th>
        </tr>
      </table>
      <button onClick={handleNextWordClick}>Next word →</button>
      <button onClick={handleShowAnswerClick}>show answer</button>
      <p>{alwaysShowAnswer || showAnswerPressed ? pickedWord.answer : ""}</p>
      <Rules usedRules={pickedWord.appliedRules}/>

      <details className={"settings-form"}>
        <summary>Ajustes (settings)</summary>
        <div className={"content-settings"}>
          <Checkbox
            labelWord="mostrar palabra española (to show spanish word)"
            idCheckBox="spanishWord"
            executeWhenIsChecked={() => setshowSpanishWord((prev) => !prev)}
            defaultValue={true}
          />
          <Checkbox
            labelWord="mostrar palabra inglesa (to show english word)"
            idCheckBox="englishWord"
            executeWhenIsChecked={() => sethHideEnglishWord((prev) => !prev)}
            defaultValue={true}
          />
          <Checkbox
            labelWord="siempre mostrar la respuesta  (always show the answer)"
            idCheckBox="showAsnweAlways"
            executeWhenIsChecked={() => setAlwaysShowAnswer((prev) => !prev)}
          />
        </div>
      </details>
    </>
  );
}

export default App;
