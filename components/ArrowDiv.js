export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  return (
    <div style={{ display: "flex", color: "red" }}>
      <div
        onClick={() =>
          setCurrentRoom({ ...currentRoom, [param]: currentRoom.width - 1 })
        }
      >
        Left
      </div>
      <div
        onClick={() =>
          setCurrentRoom({ ...currentRoom, [param]: currentRoom.width + 1 })
        }
      >
        Right
      </div>
    </div>
  );
};
