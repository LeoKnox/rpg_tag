export default EditRoom = ({ currentRoom, setCurrentRoom }) => {
  const changeData = () => {
    let temp = { ...currentRoom, width: currentRoom.wdith + 1 };
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
      </div>
      <div style={{ display: "flex" }}>
        <label>Height:</label>
        <input
          type="number"
          name="height"
          value={currentRoom.height}
          onChange={changeData}
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
      </div>
      <div style={{ display: "flex" }}>
        <label>Y:</label>
        <input
          type="number"
          name="y"
          value={currentRoom.y}
          onChange={changeData}
        />
        <ArrowDiv param="y" currentRoom={currentRoom} />
      </div>
      <button onClick={() => addRoom(newRoom)}>Edit</button>
    </>
  );
};
