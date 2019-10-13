import React from "react";
import { TicTacToeColor, TicTacToeDebugBorder } from "../TicTacToeConstants";

export default function ResetButton(props) {
  const color = {
    color: TicTacToeColor.BUTTON_TEXT,
    backgroundColor: TicTacToeColor.BUTTON_BACKGROUND,
    borderColor: TicTacToeColor.BUTTON_BACKGROUND
  };

  const style = {
    ...color,
    fontSize: Math.floor(props.gameWidth * 0.06) + "px",
    borderRadius: "8px"
  };

  return (
    <div
      style={{
        ...TicTacToeDebugBorder,
        marginTop: Math.floor(props.gameWidth * 0.1) + "px"
      }}
    >
      <button
        style={style}
        onClick={() => {
          props.resetGame();
        }}
      >
        &nbsp;&nbsp;Reset Game&nbsp;&nbsp;
      </button>
    </div>
  );
}
