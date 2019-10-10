import React from "react";
import Tile from "./Tile";

export default function TileCollection(props) {
  function onTileClicked(cellX, cellY) {
    props.onTileClicked(cellX, cellY);
  }

  function range(n) {
    let outArray = [];
    if (n <= 0) {
      return outArray;
    }

    for (let index = 0; index < n; ++index) {
      outArray.push(index);
    }

    return outArray;
  }

  let style = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(128,0,0)"
  };

  return (
    <div>
      <table>
        <tbody>
          {range(3).map(yIndex => {
            return (
              <tr style={style} key={yIndex}>
                {range(3).map(xIndex => {
                  return (
                    <td style={style} key={xIndex}>
                      <Tile
                        key={xIndex}
                        cellState={props.board[yIndex][xIndex]}
                        onTileClicked={onTileClicked}
                        cellY={yIndex}
                        cellX={xIndex}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
