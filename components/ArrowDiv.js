import { useState, useEffect } from "react";

export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const [timerActive, setTimerActive] = useState(false);
  var holdLoop;

  const start = (e) => {
    /*setInterval(
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 }),
      1000
    );*/
    setInterval(() => updateValue(e.target.id), 1000);
    /*setTimerActive(true);
    let i = 0;
    let temp = e.target.id;
    while (i < 10) {
      updateValue(temp);
      i++;
    }*/
  };
  const updateValue = (temp) => {
    console.log("red " + temp);

    if (temp == "decrease") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
      console.log("dec");
    } else if (temp == "increase") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] + 1 });
      console.log("inc");
    }
  };
  function repeat(param) {
    timer = setInterval(param, 1000);
    //param();
  }
  const stopTimer = () => {
    //setInterval(() => {}, 0);
    clearInterval(holdLoop);
    setTimerActive(false);
    console.log("stop" + timerActive);
  };
  return (
    <div style={{ display: "flex", color: "darkblue" }}>
      <button>+</button>
      <button>-</button>
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
