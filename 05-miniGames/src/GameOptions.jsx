import React from "react";
import { Link } from "react-router-dom";

function GameOptions({gameName="Game name", gameDescription="Game Description", gameImage, gameLink = "/"}) {
  return (
    <>
        <Link className="gameBox" to={gameLink}>
            <img className="backgroundImage" src={gameImage}  alt={gameName + " game"}/>
            <h3>{gameName}</h3>
            <p className="description">{gameDescription}</p>
        </Link>
    </>
  );
}

export default GameOptions;
