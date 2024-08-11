import { useState, useEffect, useCallback } from "react";
import { roomData } from "./divGridData.js";
import DivGridMap from "./DivGridMap.js";

export default GridBuild = () => {
  console.log(roomData());
  const [divGridData, setDivGridData] = useState(roomData(5, 10));
  const [currentRoomId, setCurrentRoomId] = useState(0);
  const [currentRoom, setCurrentRoom] = useState({});
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [initialXPosition, setInitialXPosition] = useState(0);
  const [initialYPosition, setInitialYPosition] = useState(0);
  useEffect(() => {
    setDivGridData(roomData(xOffset,yOffset));
  },[])
  useEffect(() => {
    
  setCurrentRoom(divGridData[currentRoomId]);
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
  const changeValue = (e) => {
    let newRoom = {...currentRoom, [e.target.name]: parseInt(e.target.value)}
 setCurrentRoom(newRoom)
setDivGridData(roomData(xOffset,yOffset))
    setDivGridData(divGridData.map(room =>
      room.id === currentRoomId ? {...room, [e.target.name]: e.target.value}:room
    ))
  }
  const handleMouseDown = (event,roomId) => {
    if (roomId < 0) {
      //setCurrentRoomId(roomId)
      setInitialXPosition(event.clientX);
      setInitialYPosition(event.clientY);
      setIsMouseDown(true);
      
    } else {
      console.log("heya" );
      //setCurrentRoomId(roomId)
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
          onChange={changeValue}
          value={currentRoom.width}
        />
        <label>Height: </label>
        <input
          type="number"
          name="height"
          onChange={changeValue}
          value={currentRoom.height}
        />
        <label>x: </label>
        <input type="number" name="x" onChange={changeValue} value={currentRoom.x} />
        <label>y: </label>
        <input type="number" name="y" onChange={changeValue} value={currentRoom.y} />
      </div>
      <div
        style={gridMapStyle}
        onMouseDown={(event) => handleMouseDown(event, -1)}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {divGridData.map((room) => (
          <DivGridMap
            room={room}
            className="gridBuildRoom"
            setCurrentRoomId = {setCurrentRoomId}
            handleMouseDown={handleMouseDown}
            xOffset={xOffset}
            yOffset={yOffset}
          />
        ))}
      </div>
    </div>
  );
};
