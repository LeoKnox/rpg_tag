import { useState } from "react";

export default GridBuild = () => {
  const [width, setWidth] = useState(5);
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
    </div>
  );
};
