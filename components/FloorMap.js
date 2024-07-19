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
  return (
    <>
      <p>Floor Map</p>
      <p>One {roomOne.height} <button>change</button></p>
      <p style={roomOne}>h</p>
      <p style={roomTwo}>h</p>
    </>
  );
};
