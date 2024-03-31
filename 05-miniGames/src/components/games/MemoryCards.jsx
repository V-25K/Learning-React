import React from "react";
import "../games styling/MemoryCards.css";

function MemoryCards() {
  return (
    <div className="game-main-container">
      <CreateCards />
    </div>
  );
}

export default MemoryCards;

function CreateCards() {
  const cardsArray = [
    "🚗",
    "🏴‍☠️",
    "🛺",
    "🚑",
    "🚒",
    "🏍️",
    "✈️",
    "🚀",
    "⛽",
    "🌋",
    "🚗",
    "🏴‍☠️",
    "🛺",
    "🚑",
    "🚒",
    "🏍️",
    "✈️",
    "🚀",
    "⛽",
    "🌋",
  ];

  const shuffledArray = shuffle(cardsArray);

  const cardCreation = shuffledArray.map((card, index) => (
    <div key={index} className="card-container">
      <input type="checkbox" id={`card${index}`} />
      <label htmlFor={`card${index}`} className="card">
        <div className="card-front">{card}</div>
        <div className="card-back">
          <img
            src="https://w1.pngwing.com/pngs/608/471/png-transparent-games-icon-video-games-game-controllers-symbol-racing-video-game-icon-design-mobile-game-yellow-thumbnail.png"
            alt="cards back pattern"
          />
        </div>
      </label>
    </div>
  ));
  return cardCreation;
}

//shuffling the cards in random
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
