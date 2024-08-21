export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const updateValue = (e) => {
    console.log(e.target.name);
    if (e.target.id == "decrease") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
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
