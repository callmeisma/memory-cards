import React from "react";

const HeaderScore = (props) => {
  return (
    <header>
      <div>
        <h1>Memory Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once! Can you get to 12?
        </p>
      </div>
      <div>
        <h2>Score: {props.score} / 12</h2>
        <h2>High Score: {props.highScore}</h2>
      </div>
    </header>
  );
};

export default HeaderScore;
