export default DivGridMap = ({ room, setCurrentRoomId, handleMouseDown }) => {
  const roomStyle = {
    border: `2px solid ${room.color || "darkblue"}`,
    gridArea: `${room.y}/${room.x}/ span ${room.height}/ span ${room.width}`,
  };
  const handleMouse = () => {
    setCurrentRoomId(room.id);
    //handleMouseDown(5);
  };
  return (
    <div className="gridBuildRoom" style={roomStyle} onMouseDown={handleMouse}>
      {room.id}
    </div>
  );
};
