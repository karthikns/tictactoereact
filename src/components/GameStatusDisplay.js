import React from "react";
import { TicTacToeDebugBorder, TicTacToeColor } from "../TicTacToeConstants";
export default function GameStatusDisplay(props) {
  return (
    <div
      style={{
        ...TicTacToeDebugBorder,
        fontSize: Math.floor(props.gameWidth * 0.08) + "px",
        padding: Math.floor(props.gameWidth * 0.04) + "px",
        marginBottom: Math.floor(props.gameWidth * 0.1) + "px"
      }}
    >
      {props.gameState.isGameInProgress ? (
        <NextTurnDisplay nextTurn={props.gameState.nextTurn} />
      ) : (
        <GameOverDisplay winner={props.gameState.winner} />
      )}
    </div>
  );
}

function GetCandidateInfo(candidate) {
  let candidateInfo = { displayValue: "", displayStyle: {} };

  if (candidate == "X") {
    candidateInfo.displayValue = candidate;
    candidateInfo.displayStyle.color = TicTacToeColor.X_COLOR;
  } else if (candidate == "O") {
    candidateInfo.displayValue = candidate;
    candidateInfo.displayStyle.color = TicTacToeColor.O_COLOR;
  }

  return candidateInfo;
}

function GameOverDisplay(props) {
  let status = "It's a DRAW!";
  if (props.winner == "X") {
    status = "WON!";
  } else if (props.winner == "O") {
    status = "WON!";
  }

  const candidateInfo = GetCandidateInfo(props.winner);
  return (
    <div>
      <span style={candidateInfo.displayStyle}>
        {candidateInfo.displayValue}{" "}
      </span>
      {status}
    </div>
  );
}

function NextTurnDisplay(props) {
  const candidateInfo = GetCandidateInfo(props.nextTurn);
  return (
    <div>
      Next Turn:{" "}
      <span style={candidateInfo.displayStyle}>
        {candidateInfo.displayValue}
      </span>
    </div>
  );
}
