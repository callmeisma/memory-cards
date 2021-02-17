import React, { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import HeaderScore from "./components/HeaderScore.js"; 

const App = () => {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [cardsArr, setCardsArray] = useState([]);

  function handleIncrement() {
    setScore(score + 1);
  };

  function handleHighScore() {
    setHighScore(score);
  };

  function handleCard(card) {
    setCardsArray((prevArray) => [...prevArray, card]);
  };

  function resetScore() {
    setScore(0);
    setCardsArray([]);
  };

  function handleGameLogic(card) {
    if (!cardsArr.includes(card)) {
      handleCard(card);
      handleIncrement();
    } else {
      handleHighScore();
      resetScore();
    }
  }

  return (
    <div>
      <HeaderScore score={score} highScore={highScore} />
      <CardContainer handleGameLogic={handleGameLogic} score={score} highScore={highScore}/>
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;