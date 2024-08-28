import { useState, useEffect } from "react";

export default ArrowDiv = ({ param, currentRoom, setCurrentRoom }) => {
  const [timerActive, setTimerActive] = useState(false);

  const updateValue = (e) => {
    console.log("red ");

    if (e.target.id == "decrease") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] - 1 });
      console.log("dec");
    } else if (e.target.id == "increase") {
      setCurrentRoom({ ...currentRoom, [param]: currentRoom[param] + 1 });
      console.log("inc");
    }
  };
  const repeat = () => {
    setInterval(function () {
      return setCurrentRoom({
        ...currentRoom,
        [param]: currentRoom[param] + 1,
      });
    }, 1000);
  };

  return (
    <div style={{ display: "flex", color: "darkblue" }}>
      <button onMouseDown={repeat} onMouseUp={clearInterval()}>
        +
      </button>
      <button>-</button>
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
