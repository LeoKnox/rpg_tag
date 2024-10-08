import { useState } from "react";

export default FloorMap = () => {
  let level = {
    position: "absolute",
    border: "4px solid red",
  };
  const [roomOne, setRoomOne] = useState({
    position: "absolute",
    height: "100px",
    width: "75px",
    top: "150px",
    left: "60px",
    border: "3px solid black",
  });
  let roomTwo = {
    position: "absolute",
    height: "100px",
    width: "75px",
    top: "170px",
    left: "80px",
    border: "3px solid green",
  };
  const changeRoom = (x) => {
    let newVal = x + parseInt(roomOne.width.slice(0, -2));

    setRoomOne((roomOne) => ({
      ...roomOne,
      top: "180px",
    }));
    roomTwo.top = "200px";
    alert(JSON.stringify(roomTwo.top));
  };
  return (
    <div style={level}>
      <p>Floor Map</p>
      <p>
        One {roomOne.height}{" "}
        <button onClick={() => changeRoom(10)}>change</button>
      </p>
      <div style={roomOne}>h</div>
      <div style={roomTwo}>h</div>
    </div>
  );
};
