import { useState } from "react";

export default GridMap = () => {
  const [useColor, setUseColor] = useState("blue");
  const [useColumn, setUseColumn] = useState(2);
  const gridMapStyle = {
    display: "grid",
    gridTemplateColumns: `${useColumn}fr 1fr`,
    color: useColor,
  };
  const roomStyle = {
    border: "2px solid darkblue",
    gridColumn: "1",
  };
  return (
    <div style={gridMapStyle}>
      <div style={roomStyle}>Grid Map</div>
      <div style={roomStyle}>Grid Two</div>
    </div>
  );
};
