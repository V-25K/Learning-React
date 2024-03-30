import React from "react";
import { useState } from "react";
import "../games styling/GuessTheNumber.css";

function GuessTheNumber() {
  const [guessUsed, setGuessUsed] = useState(0);
  const [remainingGuess, setRemainingGuess] = useState(10);
  const [result, setResult] = useState("");
  const [playGame, setPlayGame] = useState(true);
  const [computersChoice, setComputersChoice] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [inputDisabled, setInputDisabled] = useState(false);
  let hasWon = false

  const userInput = document.getElementById("guessInput");

  const handleEvent = (e) => {
    e.preventDefault();
    if (!playGame) return;
    const guess = parseInt(e.target.elements.guessInput.value);
    validateGuess(guess);
  };

  function validateGuess(guess) {
    setGuessUsed(guessUsed + 1);
    setRemainingGuess(10 - guessUsed - 1);
    if (guessUsed === 9) {
      setResult(`Game over, Random number was ${computersChoice}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }

  function checkGuess(guess) {
    if (guess === computersChoice) {
      setResult(`Yayy!! You guessed it right 🥳`);
      hasWon = true
      endGame();
    } else if (guess < computersChoice) {
      setResult(`Number is TOO low 😔 Try a higher one.`);
    } else if (guess > computersChoice) {
      setResult(`Number is TOO High 🙄 Try a lower one.`);
    }
  }

  const endGame = () => {
    setPlayGame(false);
    setInputDisabled(true);
    if(!hasWon){
      setResult(`Game over, Random number was ${computersChoice}`)
    }  
  };

  const newGame = () => {
    setGuessUsed(0);
    setRemainingGuess(10);
    setResult("");
    userInput.value = "";
    setInputDisabled(false);
    setPlayGame(true);
    setComputersChoice(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="game-main-container">
      <div className="game-container">
        <h1 className="game-title">Guess the Number</h1>
        <div className="guesses-box">
          <p>Guesses used: {guessUsed}</p>
          <p>Remaining Guesses: {remainingGuess}</p>
        </div>
        <div className="input-container">
          <form onSubmit={handleEvent}>
            <input
              type="number"
              id="guessInput"
              placeholder="Enter a number..."
              max={100}
              min={1}
              required
              disabled={inputDisabled}
            />
            <input type="submit" />
          </form>
          <div className="button-container">
            <button onClick={playGame ? endGame : newGame}>
              {playGame ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10152/10152161.png"
                  alt="exit image"
                />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5345/5345222.png"
                  alt="play again image"
                />
              )}
            </button>
          </div>
        </div>
        <div className="rule-box">
          <h5>Rules:</h5>
          <ul>
            <li>
              The game generates a random number between 1 and 100. The player
              has <b style={{ color: "yellow" }}>10 guesses</b> to correctly
              identify this number.
            </li>
            <li>
              After each guess, the game informs the player if their guess is
              too high, too low, or correct.
            </li>
            <li>
              If the player guesses within the{" "}
              <b style={{ color: "yellow" }}>10 attempts</b>, they win. If not,
              they lose.
            </li>
          </ul>
        </div>
        <p className="result-text">{result}</p>
      </div>
    </div>
  );
}

export default GuessTheNumber;
