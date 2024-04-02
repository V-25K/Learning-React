import React, { useState, useEffect } from "react";
import "../games styling/MemoryCards.css";

const cardsArray = [
  { img: "🚗", matched: false },
  { img: "🏴‍☠️", matched: false },
  { img: "🛺", matched: false },
  { img: "🚑", matched: false },
  { img: "🚒", matched: false },
  { img: "🏍️", matched: false },
  { img: "✈️", matched: false },
  { img: "🚀", matched: false },
  { img: "⛽", matched: false },
  { img: "🌋", matched: false },
];

function MemoryCards() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardsArray, ...cardsArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    if (card.id === choiceOne?.id) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.img === choiceTwo.img) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.img === choiceOne.img) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <aside>
        <button onClick={shuffleCards}>Reset</button>
        <p>Turns: {turns}</p>
      </aside>
      <div className="cardGame-main-container">
        {cards.map((card) => (
          <CreateCards
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </>
  );
}

export default MemoryCards;

const CreateCards = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <p className="front">{card.img}</p>
        <img
          className="back"
          src="https://images.pexels.com/photos/67642/blossom-bloom-flower-blue-67642.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="cards back pattern"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
