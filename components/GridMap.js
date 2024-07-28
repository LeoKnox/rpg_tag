import { useState } from "react";

export default GridMap = () => {
  const [useColor, setUseColor] = useState("blue");
  const [useColumn, setUseColumn] = useState(2);
  const gridMapStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(20, 1fr)",
    color: useColor,
  };
  const roomStyle1 = {
    border: "2px solid darkblue",
    gridArea: "3/ 1/  4/ 8",
  };
  const roomStyle2 = {
    border: "2px solid darkblue",
    gridColumn: "5/ span 3",
    gridRow: "8/ span 2",
  };
  return (
    <div style={gridMapStyle}>
      <div style={roomStyle1}>Grid Map</div>
      <div style={roomStyle2}>Grid Two</div>
    </div>
  );
};
