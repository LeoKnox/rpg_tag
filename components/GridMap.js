import { useState } from "react";

export default GridMap = () => {
  const [useColor, setUseColor] = useState("blue");
  const [useColumn, setUseColumn] = useState(2);
  const gridMapStyle = {
    display: "grid",
    //gridTemplateColumns: `${useColumn}fr 1fr 1fr`,
    color: useColor,
  };
  const roomStyle1 = {
    border: "2px solid darkblue",
    gridColumn: "1",
  };
  const roomStyle2 = {
    border: "2px solid darkblue",
    gridColumn: "3",
    gridRow:"2",
  };
  return (
    <div style={gridMapStyle}>
      <div style={roomStyle1}>Grid Map</div>
      <div style={roomStyle2}>Grid Two</div>
    </div>
  );
};
