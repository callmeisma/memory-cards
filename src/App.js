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
  }

  function handleHighScore() {
    setHighScore(score);
  }

  function handleCard(card) {
    setCardsArray((prevArray) => [...prevArray, card]);
  }

  function resetScore() {
    setScore(0);
    setCardsArray([]);
  }

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
      <CardContainer
        handleGameLogic={handleGameLogic}
        score={score}
        highScore={highScore}
      />
      <footer>
        <p>Copyright © Ismael Fernandez</p>
        <a href="https://github.com/callmeisma/memory-cards" target="_blank">
          <i class="fab fa-github" aria-hidden="true"></i>
        </a>
      </footer>
    </div>
  );
};

export default App;
