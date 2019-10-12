import React from "react";
import Tile from "./Tile";

export default function TileCollection(props) {
  function range(n) {
    let outArray = [];
    for (let index = 0; index < n; ++index) {
      outArray.push(index);
    }

    return outArray;
  }

  const c_minimumSupportedBoardSizePx = 100;
  const c_boardSizePx =
    props.boardSize < c_minimumSupportedBoardSizePx
      ? c_minimumSupportedBoardSizePx
      : props.boardSize;
  const c_boardSizePxString = c_boardSizePx + "px";
  const c_boardStyle = {
    width: c_boardSizePxString,
    height: c_boardSizePxString
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
