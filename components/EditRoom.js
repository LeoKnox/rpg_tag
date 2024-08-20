export default EditRoom = ({ currentRoom, setCurrentRoom }) => {
  const changeData = (e) => {
    let temp = { ...currentRoom, [e.target.name]: e.target.value };
    setCurrentRoom(temp);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <label>Width:</label>
        <input
          type="number"
          name="width"
          value={currentRoom.width}
          onChange={changeData}
        />
        <ArrowDiv
          param="width"
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label>Height:</label>
        <input
          type="number"
          name="height"
          value={currentRoom.height}
          onChange={changeData}
        />
        <ArrowDiv
          param="height"
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label>X:</label>
        <input
          type="number"
          name="x"
          value={currentRoom.x}
          onChange={changeData}
        />
        <ArrowDiv
          param="x"
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label>Y:</label>
        <input
          type="number"
          name="y"
          value={currentRoom.y}
          onChange={changeData}
        />
        <ArrowDiv
          param="y"
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
      </div>
      <button onClick={() => addRoom(newRoom)}>Edit</button>
    </>
  );
};
