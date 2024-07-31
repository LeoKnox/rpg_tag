export default DivGridMap = ({ room }) => {
  const roomStyle = {
    border: `2px solid ${room.color || "darkblue"}`,
    gridArea: `${room.y}/${room.x}/ span ${room.height}/ span ${room.width}`,
  };
  return <div style={roomStyle}>{room.id}</div>;
};
