import { useState, useEffect } from "react";

export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const [timerActive, setTimerActive] = useState(false);

  const start = (e) => {
    let i = 0;
    while (i < 10) {
      console.log(e.target.id);
      updateValue(e.target.id);
      setTimerActive(true);
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
    setInterval(() => {}, 0);
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
        onClick={() => setTimerActive(!timerActive)}
        onMouseDown={(e) => start(e)}
        onMouseUp={stopTimer}
      >
        ↑
      </div>
    </div>
  );
};
