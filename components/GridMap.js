import { useState } from "react";

export default GridMap = () => {
  const [useColor, setUseColor] = useState("blue");
  const [useColumn, setUseColumn] = useState(2);
  const gridMapStyle = {
    display: "grid",
    border: "2px solid red",
    gridTemplateColumns: `${useColumn}fr 1fr`,
    color: useColor,
  };
  return (
    <div style={gridMapStyle}>
      <div>Grid Map</div>
      <div>Grid Two</div>
    </div>
  );
};
