import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import animals from "./AnimalList.json";

const CardContainer = (props) => {
  const [cards, setCards] = useState(animals);

  function shuffle(newCards) {
    for (let index = newCards.length - 1; index > 0; index--) {
      let randomIndex = Math.floor(Math.random() * index);
      [newCards[randomIndex], newCards[index]] = [
        newCards[index],
        newCards[randomIndex],
      ];
    }
  }

  useEffect(() => {
    var newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
  }, [props.score, props.highScore]);

  return (
    <div className="board">
      {cards.map((card) => {
        return (
          <div
            key={uniqid()}
            className="card"
            onClick={props.handleGameLogic.bind(this, card.name)}
          >
            <i className={card.image}></i>
            <h3>
              <strong>{card.name}</strong>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
