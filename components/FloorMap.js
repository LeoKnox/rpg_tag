export default FloorMap = () => {
  let level = {
    border: "4px solid red",
  }
  let roomOne = {
    position: "relative",
    height: "100px",
    width: "75px",
    top: "150px",
    left: "60px",
    border: "3px solid black",
  };
  let roomTwo = {
    position: "relative",
    height: "100px",
    width: "75px",
    top: "170px",
    left: "80px",
    border: "3px solid green",
  };
  const changeRoom = (x) => {
    let newVal = x + parseInt(roomOne.width.slice(0, -2));

    roomOne.width = newVal + "px";
    alert(newVal);
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
