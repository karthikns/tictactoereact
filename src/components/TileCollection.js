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

  const boardStyle = { width: "156px", height: "auto" };

  return (
    <div style={{ ...boardStyle }}>
      {range(9).map(index => {
        const xIndex = index % 3;
        const yIndex = Math.floor(index / 3);
        return (
          <Tile
            key={index}
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
