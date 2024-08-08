export default DivGridMap = ({ room, setCurrentRoomId, handleMouseDown }) => {
  const roomStyle = {
    border: `2px solid ${room.color || "darkblue"}`,
    gridArea: `${room.y}/${room.x}/ span ${room.height}/ span ${room.width}`,
  };
  const handleMouse = () => {
    alert(room.id);
  };
  return (
    <div
      className="gridBuildRoom"
      style={roomStyle}
      onMouseDown={() => handleMouseDown(room.id)}
      onClick={setCurrentRoomId(1)}
    >
      {room.id}
    </div>
  );
};
