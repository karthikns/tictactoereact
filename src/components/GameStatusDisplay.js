import React from "react";

export default function GameStatusDisplay(props) {
  return (
    <div
      style={{ padding: "25px", fontSize: "40px", fontFamily: "sans-serif" }}
    >
      {props.gameState.isGameInProgress ? (
        <NextTurnDisplay nextTurn={props.gameState.nextTurn} />
      ) : (
        <GameOverDisplay winner={props.gameState.winner} />
      )}
    </div>
  );
}

function GameOverDisplay(props) {
  let displayString = "It's a DRAW!";
  if (props.winner == "X") {
    displayString = "X WON!";
  } else if (props.winner == "O") {
    displayString = "O WON!";
  }

  return (
    <div>
      <span>{displayString}</span>
    </div>
  );
}

function NextTurnDisplay(props) {
  return <span>Next Turn: {props.nextTurn}</span>;
}
