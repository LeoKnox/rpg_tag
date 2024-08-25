import { useState, useEffect } from "react";

export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const [timerActive, setTimerActive] = useState(false);

  const start = (e) => {
    setTimerActive(true);
    let i = 0;
    while (timerActive && i < 10) {
      updateValue(e.target.id);
      i++;
    }
  };
  const updateValue = (temp) => {
    console.log("red " + temp);

    if (temp == "decrease") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
    }
    if (temp == "increase") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] + 1 });
    }
  };
  function repeat(param) {
    timer = setInterval(param, 1000);
    param();
  }
  const stopTimer = () => {
    //setInterval(() => {}, 0);
    setTimerActive(false);
    console.log("stop" + timerActive);
  };
  return (
    <div style={{ display: "flex", color: "darkblue" }}>
      <div
        id="decrease"
        className="arrowButton"
        onClick={start}
        onMouseDown={(e) => start(e)}
        onMouseUp={stopTimer}
      >
        ↓
      </div>
      <div
        id="increase"
        className="arrowButton"
        onMouseDown={(e) => start(e)}
        onMouseUp={stopTimer}
      >
        ↑
      </div>
    </div>
  );
};
