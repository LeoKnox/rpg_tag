import {useState} from "react";

export default GridMap = () => {
const [useColor, setUseColor] = useState("red");
  const gridMapStyle = {
    border: "2px solid red",
    color: {useColor},
  };
  return (
    <div style={gridMapStyle}>
      <p>Grid Map</p>
    </div>
  );
};
