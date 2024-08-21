import { useState } from "react";

export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const [timerActive, setTimerActive] = useState(false);
  let timerId = setInterval(() => {
    3000;
  }, 1000);
  const updateValue = (e) => {
    setTimerActive("true");
    let temp = e.target.id;
    setInterval(() => {
      if (temp == "decrease") {
        setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
      }
      if (temp == "increase") {
        setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] + 1 });
      }
      console.log("red");
    }, 1000);
  };
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
