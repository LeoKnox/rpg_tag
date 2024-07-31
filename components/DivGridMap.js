export default DivGridMap = ({ room }) => {
  const roomStyle = {
    border: `2px solid ${room.color}`,
    gridArea: `${room.x}/${room.y}/ span ${room.width}/ span ${room.length}`,
  };
  return <div style={roomStyle}>{room.id}</div>;
};
