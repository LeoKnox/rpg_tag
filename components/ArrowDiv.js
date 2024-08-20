export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  return (
    <div style={{ display: "flex", color: "red" }}>
      <div
        className="arrowButton"
        onMousedown={() =>
          setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 })
        }
      >
        ↓
      </div>
      <div
        className="arrowButton"
        onClick={() =>
          setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] + 1 })
        }
      >
        ↑
      </div>
    </div>
  );
};
