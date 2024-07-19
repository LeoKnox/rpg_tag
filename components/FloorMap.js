export default FloorMap = () => {
  let roomOne = {
    position: "absolute",
    height: "100px",
    width: "75px",
    top: "150px",
    left: "60px",
    border: "3px solid black",
  };
  let roomTwo = {
    position: "absolute",
    height: "100px",
    width: "75px",
    top: "50px",
    left: "150px",
    border: "3px solid green",
  };
  const changeRoom = (x) => {
    let newVal = x + parseInt(roomOne.width.slice(0, -2));
    roomOne.width = newVal + "px";
    alert(roomOne.width);
  };
  return (
    <>
      <p>Floor Map</p>
      <p>
        One {roomOne.height}{" "}
        <button onClick={() => changeRoom(10)}>change</button>
      </p>
      <p style={roomOne}>h</p>
      <p style={roomTwo}>h</p>
    </>
  );
};
