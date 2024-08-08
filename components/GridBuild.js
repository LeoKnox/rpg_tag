import { useState, useEffect, useCallback } from "react";
import { roomData } from "./divGridData.js";
import DivGridMap from "./DivGridMap.js";

export default GridBuild = () => {
  console.log(roomData());
  const [divGridData, setDivGridData] = useState(roomData(5, 10));
  const [currentRoomId, setCurrentRoomId] = useState(0);
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(5);
  const [x, setx] = useState(5);
  const [y, sety] = useState(5);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [initialXPosition, setInitialXPosition] = useState(0);
  const [initialYPosition, setInitialYPosition] = useState(0);
  useEffect(() => {
    setDivGridData(roomData(xOffset,yOffset))
  },[])
  useEffect(() => {
  setWidth(divGridData[1].width)
  setHeight(divGridData[1].height)
  },[currentRoomId])
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
  /*const handleMouseDown = useCallback((roomId) => {
    setCurrentRoomId(roomId)
  }, [currentRoomId])*/
  const handleMouseDown = (roomId) => {
    console.log("now"+roomId)
    if (roomId >= 0) {
      setCurrentRoomId(roomId)
      setInitialXPosition(event.clientX);
      setInitialYPosition(event.clientY);
      setIsMouseDown(true);
      
    } else {
      console.log("heya" + roomId);
    }
  };
  const handleMouseMove = (event) => {
    if (isMouseDown) {
      setXOffset(Math.floor((event.clientX - initialXPosition) / 10));
      setYOffset(Math.floor((event.clientY - initialYPosition) / 10));
    }
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  return (
    <div>
      <div style={gridBuildStyle}>
        <p>{xOffset} id: {currentRoomId}</p>
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
      <div
        style={gridMapStyle}
        onMouseDown={() => handleMouseDown(-1)}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {divGridData.map((room) => (
          <DivGridMap
            room={room}
            className="gridBuildRoom"
            setCurrentRoomId = {() => setCurrentRoomId()}
            handleMouseDown={() => handleMouseDown()}
          />
        ))}
      </div>
    </div>
  );
};
