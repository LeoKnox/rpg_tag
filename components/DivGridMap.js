export default DivGridMap = ({ room, handleMouseDown }) => {
  const roomStyle = {
    border: `2px solid ${room.color || "darkblue"}`,
    gridArea: `${room.y}/${room.x}/ span ${room.height}/ span ${room.width}`,
  };
  return (
    <div style={roomStyle} onMouseDown={() => handleMouseDown(3)}>
      {room.id}
    </div>
  );
};
