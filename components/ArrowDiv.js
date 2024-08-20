export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const updateValue = () => {
    setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
  };
  return (
    <div style={{ display: "flex", color: "red" }}>
      <div className="arrowButton" onMouseDown={updateValue}>
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
