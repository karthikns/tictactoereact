import React from "react";

export default function Tile(props) {
  const cellText = props.cellState == "-" ? "" : props.cellState;

  const font = {
    fontFamily: "sans-serif",
    fontSize: "36px",
    color: props.cellState == "X" ? "blue" : "red"
  };

  const layout = {
    width: "50px",
    height: "50px",
    textAlign: "center",
    verticalAlign: "middle",
    display: "table-cell",
    float: "left",
    margin: "0",
    padding: "0"
  };

  const rightBorder = {
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    borderRightColor: "black"
  };

  const bottomBorder = {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "black"
  };

  const rightBorderStyle = props.cellX < 2 ? rightBorder : {};
  const bottomBorderStyle = props.cellY < 2 ? bottomBorder : {};
  return (
    <div
      style={{
        ...layout,
        ...font,
        ...rightBorderStyle,
        ...bottomBorderStyle
      }}
      onClick={() => {
        if (cellText != "") {
          return;
        }
        props.onTileClicked(props.cellX, props.cellY);
      }}
    >
      {cellText}
    </div>
  );
}
