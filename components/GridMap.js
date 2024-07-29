import { useState } from "react";
import { divGridData } from "./divGridData.js";

export default GridMap = () => {
  const [useColor, setUseColor] = useState("blue");
  const [useColumn, setUseColumn] = useState(2);
  const [gridMap, setGridMap] = useState(divGridData);
  console.log(gridMap);
  const gridMapStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(20, 1fr)",
    gridTemplateRows: "repeat(20, 1fr)",
    color: useColor,
    aspectRatio: "1",
    width: "600px",
    height: "600px",
    border: "1px solid lightblue",
  };
  const roomStyle1 = {
    border: "2px solid darkblue",
    gridArea: `${gridMap[0].x}/  ${gridMap[0].y}/ ${gridMap[0].width}/ ${gridMap[0].height}`,
  };
  const roomStyle2 = {
    border: "2px solid darkblue",
    gridArea: "4/2/span 5/ span 5",
  };
  return (
    <div style={gridMapStyle}>
      <div style={roomStyle1}>Grid Map</div>
      <div style={roomStyle2}>Grid Two</div>
    </div>
  );
};
