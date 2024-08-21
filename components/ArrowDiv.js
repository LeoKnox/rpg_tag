export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const updateValue = (e) => {
    if (e.target.id == "decrease") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
    }
    if (e.target.id == "increase") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] + 1 });
    }
  };
  return (
    <div style={{ display: "flex", color: "darkblue" }}>
      <div
        id="decrease"
        className="arrowButton"
        onMouseDown={(e) => updateValue(e)}
      >
        ↓
      </div>
      <div
        id="increase"
        className="arrowButton"
        onMouseDown={(e) => updateValue(e)}
      >
        ↑
      </div>
    </div>
  );
};
