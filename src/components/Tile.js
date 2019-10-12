import React from "react";

export default function Tile(props) {
  const cellText = props.cellState == "-" ? "" : props.cellState;

  const fontSizePxString = props.fontSizePx + "px";
  const font = {
    fontFamily: "sans-serif",
    fontSize: fontSizePxString,
    color: props.cellState == "X" ? "blue" : "red"
  };

  const layout = {
    width: "32%",
    height: "32%",
    textAlign: "center",
    verticalAlign: "middle",
    display: "table-cell",
    float: "left",
    margin: "0",
    padding: "0"
  };

  const rightBorder = {
    borderRightWidth: "2px",
    borderRightStyle: "solid",
    borderRightColor: "black"
  };

  const bottomBorder = {
    borderBottomWidth: "2px",
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
