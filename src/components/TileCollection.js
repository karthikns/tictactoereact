import React from "react";
import Tile from "./Tile";
import { TicTacToeDebugBorder } from "../TicTacToeConstants";

export default function TileCollection(props) {
  function range(n) {
    let outArray = [];
    for (let index = 0; index < n; ++index) {
      outArray.push(index);
    }

    return outArray;
  }

  const boardWidthRatio = 0.98;
  const c_boardSizeFromGameWidth = Math.floor(
    props.gameWidth * boardWidthRatio
  );
  const c_minimumSupportedBoardSizePx = 100;
  const c_boardSizePx =
    c_boardSizeFromGameWidth < c_minimumSupportedBoardSizePx
      ? c_minimumSupportedBoardSizePx
      : c_boardSizeFromGameWidth;
  const c_boardSizePxString = c_boardSizePx + "px";

  const marginRatio = (1 - boardWidthRatio) / 2;
  const margin = Math.floor(props.gameWidth * marginRatio);
  const c_boardStyle = {
    ...TicTacToeDebugBorder,
    width: c_boardSizePxString,
    height: c_boardSizePxString,
    margin: margin + "px"
  };

  const c_fontSizeMultiplier = 0.25;
  const c_fontSizePx = Math.floor(c_boardSizePx * c_fontSizeMultiplier);

  return (
    <div style={{ ...c_boardStyle }}>
      {range(9).map(index => {
        const xIndex = index % 3;
        const yIndex = Math.floor(index / 3);
        return (
          <Tile
            key={index}
            fontSizePx={c_fontSizePx}
            cellState={props.board[yIndex][xIndex]}
            onTileClicked={(cellX, cellY) => {
              props.onTileClicked(cellX, cellY);
            }}
            cellY={yIndex}
            cellX={xIndex}
          />
        );
      })}
    </div>
  );
}
