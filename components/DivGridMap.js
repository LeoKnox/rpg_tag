export default DivGridMap = ({ room }) => {
    const roomStyle = {
        border: `2px solid ${room.id}`,
        gridArea: `${room.x}/${room.y}/ ${room.width}/ ${room.length}`,
      };
  return <div style={roomStyle}>{room.id}</div>;
};
