import React from "react";
import { TicTacToeColor } from "../TicTacToeConstants";

export default function ResetButton(props) {
  const color = {
    color: TicTacToeColor.BUTTON_TEXT,
    backgroundColor: TicTacToeColor.BUTTON_BACKGROUND,
    borderColor: TicTacToeColor.BUTTON_BACKGROUND
  };

  const style = {
    ...color,
    marginBottom: "20px",
    fontSize: "30px",
    borderRadius: "8px"
  };

  return (
    <button
      style={style}
      onClick={() => {
        props.resetGame();
      }}
    >
      &nbsp;&nbsp;Reset Game&nbsp;&nbsp;
    </button>
  );
}
