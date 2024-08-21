import { useState } from "react";

export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const [timerActive, setTimerActive] = useState(false);
  let timerId = setInterval(() => {
    3000;
  }, 1000);
  const updateValue = (e) => {
    setInterval(() => {
      if (e.target.id == "decrease") {
        setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
      }
      if (e.target.id == "increase") {
        setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] + 1 });
      }
    }, 1000);
  };
  const stopTimer = () => {
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
