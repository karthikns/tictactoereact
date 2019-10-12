import React from "react";

export default function GameStatusDisplay(props) {
  return (
    <div style={{ padding: "25px" }}>
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

  const style = { fontFamily: "sans-serif", fontSize: "40px" };
  return (
    <div>
      <span style={style}>{displayString}</span>
    </div>
  );
}

function NextTurnDisplay(props) {
  const style = { fontFamily: "sans-serif", fontSize: "40px" };
  return <span style={style}>Next Turn: {props.nextTurn}</span>;
}
