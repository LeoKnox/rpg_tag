import { useState, useEffect, useCallback } from "react";
import { roomData } from "./divGridData.js";
import DivGridMap from "./DivGridMap.js";
import AddRoom from "./AddRoom.js";
import EditRoom from "./EditRoom.js";

export default GridBuild = () => {
  const [divGridData, setDivGridData] = useState(roomData(0, 0));
  const [currentRoomId, setCurrentRoomId] = useState(0);
  const [isRoom, setIsRoom] = useState(false);
  const [editAdd, setEditAdd] = useState(true);
  const [currentRoom, setCurrentRoom] = useState({});
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [initialXPosition, setInitialXPosition] = useState(0);
  const [initialYPosition, setInitialYPosition] = useState(0);
  useEffect(() => {
    console.log(`use effect ${JSON.stringify(currentRoom)}`);
    setDivGridData(
      divGridData.map((room) =>
        room.id === currentRoomId ? currentRoom : room
      )
    );
  }, [currentRoom]);
  useEffect(() => {
    setDivGridData(roomData(xOffset, yOffset));
  }, []);
  useEffect(() => {
    setCurrentRoom(divGridData[currentRoomId]);
    setEditAdd(false);
  }, [currentRoomId]);
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
  const addRoom = (newRoom) => {
    newRoom.id = divGridData.length;
    setDivGridData([...divGridData, newRoom]);
  };
  const handleMouseDown = (event) => {
    setInitialXPosition(event.clientX);
    setInitialYPosition(event.clientY);
    setIsMouseDown(true);
  };
  const handleMouseMove = (event) => {
    console.log("MM");
    if (isMouseDown) {
      if (event.target.id || isRoom) {
        setIsRoom(true);
        let newRoom = {
          ...currentRoom,
          x: currentRoom.x + ((event.clientX - initialXPosition) % 1000),
          y: currentRoom.y + ((event.clientY - initialYPosition) % 1000),
        };
        setCurrentRoom(newRoom);
        setDivGridData(
          divGridData.map((room) =>
            room.id === currentRoomId ? newRoom : room
          )
        );
        setInitialXPosition(event.clientX);
        setInitialYPosition(event.clientY);
      } else {
        console.log("not target");
        setXOffset(Math.floor((event.clientX - initialXPosition) / 10));
        setYOffset(Math.floor((event.clientY - initialYPosition) / 10));
      }
    }
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
    setIsRoom(false);
  };
  const changeCurrentRoom = () => {
    setCurrentRoomId(1);
  };
  return (
    <div onMouseUp={handleMouseUp}>
      <div style={gridBuildStyle}>
        <button onClick={() => setEditAdd(!editAdd)}>
          {editAdd ? "Edit" : "Add"}:{editAdd | currentRoomId}
        </button>
        {editAdd ? (
          <AddRoom addRoom={addRoom} />
        ) : (
          <EditRoom
            changeCurrentRoom={changeCurrentRoom}
            currentRoom={currentRoom}
            setCurrentRoom={setCurrentRoom}
          />
        )}
        <p>
          X:{xOffset} Y:{yOffset} id:
          <input
            type="number"
            value={currentRoomId}
            max={divGridData.length - 1}
            min="0"
            onChange={(e) => setCurrentRoomId(e.target.value)}
          />
        </p>
      </div>

      <div
        style={gridMapStyle}
        onMouseDown={(event) => handleMouseDown(event, -1)}
        onMouseMove={handleMouseMove}
      >
        {divGridData.map((room) => (
          <DivGridMap
            room={room}
            className="gridBuildRoom"
            setCurrentRoomId={setCurrentRoomId}
            handleMouseDown={handleMouseDown}
            xOffset={xOffset}
            yOffset={yOffset}
          />
        ))}
      </div>
    </div>
  );
};
