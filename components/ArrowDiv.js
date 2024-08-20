export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const updateValue = (e) => {
    if (e.target.name == "decrease") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
    }
  };
  return (
    <div style={{ display: "flex", color: "red" }}>
      <div name="decrease" className="arrowButton" onMouseDown={updateValue}>
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
