import { useState, useEffect } from "react";

export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const [timerActive, setTimerActive] = useState(false);

  const updateValue = (e) => {
    if (e.target.id == "decrease") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
    }
    if (e.target.id == "increase") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] + 1 });
    }
    console.log("red");
  };
  useEffect(() => {
    console.log("time");
    setInterval(updateValue(), 1000);
  }, updateValue);
  const stopTimer = () => {
    setInterval(() => {}, 0);
    setTimerActive(false);
    console.log("stop" + timerActive);
  };
  return (
    <div style={{ display: "flex", color: "darkblue" }}>
      <div
        id="decrease"
        className="arrowButton"
        onMouseDown={(e) => updateValue(e)}
        onMouseUp={stopTimer}
      >
        ↓
      </div>
      <div
        id="increase"
        className="arrowButton"
        onMouseDown={(e) => updateValue(e)}
        onMouseUp={stopTimer}
      >
        ↑
      </div>
    </div>
  );
};
