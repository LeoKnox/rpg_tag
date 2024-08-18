export default ArrowDiv = ({ currentRoom, setCurrentRoom }) => {
  return (
    <div style={{ display: "flex", color: "red" }}>
      <div
        onClick={() => setCurrentRoom({ ...currentRoom, x: currentRoom.x - 1 })}
      >
        Left
      </div>
      <div
        onClick={() => setCurrentRoom({ ...currentRoom, x: currentRoom.x + 1 })}
      >
        Right
      </div>
    </div>
  );
};
