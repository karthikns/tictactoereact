import React from "react";

export default function ResetButton(props) {
  return (
    <button
      onClick={() => {
        props.resetGame();
      }}
    >
      Reset Game
    </button>
  );
}
