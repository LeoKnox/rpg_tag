import { useState } from "react";
import DivBridMap from "./DivGridMap.js";

export default GridBuild = () => {
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(5);
  const [x, setx] = useState(5);
  const [y, sety] = useState(5);
  let room = { width: width, height: height, x: x, y: y };
  const gridMapStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(20, 1fr)",
    gridTemplateRows: "repeat(20, 1fr)",
    color: "red",
    aspectRatio: "1",
    width: "600px",
    height: "600px",
    border: "1px solid lightblue",
  };
  const gridBuildStyle = {
    color: "slate",
    width: "5ch",
  };
  return (
    <div>
      <div style={gridBuildStyle}>
        <label>Width: </label>
        <input
          type="number"
          name="width"
          onChange={(e) => setWidth(e.target.value)}
          value={width}
        />
        <label>Height: </label>
        <input
          type="number"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
        <label>x: </label>
        <input type="number" onChange={(e) => setx(e.target.value)} value={x} />
        <label>y: </label>
        <input type="number" onChange={(e) => sety(e.target.value)} value={y} />
      </div>
      <div style={gridMapStyle}>
        <DivGridMap room={room} />
      </div>
    </div>
  );
};
