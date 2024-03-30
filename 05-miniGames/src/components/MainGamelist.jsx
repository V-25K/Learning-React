import React from "react";
import GameOptions from "../GameOptions";

import game2024Image from "../assets/2048.png"
import guessTheNumberImage from "../assets/guessTheNumber.png";
import memoryCardsImage from "../assets/memoryCard.png";

function MainGamelist() {
  return (
    <>
      <GameOptions
        gameName={"Game of 2024"}
        gameDescription={"This is a game to test your maths skills"}
        gameImage={game2024Image}
        gameLink={"/GameOf2024"}
      />
      <GameOptions
        gameName={"Memory Cards"}
        gameDescription={"This is a game to test your memory"}
        gameImage={memoryCardsImage}
        gameLink={"/MemoryCards"}
      />
      <GameOptions
        gameName={"Guess the Number"}
        gameDescription={"Guessing game"}
        gameImage={guessTheNumberImage}
        gameLink={"/GuessTheNumber"}
      />
    </>
  );
}

export default MainGamelist;
