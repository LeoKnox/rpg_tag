import { useState } from "react";
import DivBridMap from "./DivGridMap.js";

export default GridBuild = () => {
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const [x, setx] = useState(5);
  const [y, sety] = useState(5);
  let room = { width: 5, length: 5, x: 1, y: 3 };
  const gridRoomStyle = {};
  const gridBuildStyle = {
    color: "slate",
    width: "5ch",
  };
  return (
    <div>
      <div style={gridBuildStyle}>
        <label>Width: </label>
        <input type="number" name="width" value={width} />
        <label>Height: </label>
        <input type="number" />
        <label>x: </label>
        <input type="number" />
        <label>y: </label>
        <input type="number" />
      </div>
      <DivGridMap room={room} />
    </div>
  );
};
