import { useState } from "react";

export default AddRoom = ({ addRoom }) => {
  const [newRoom, setNewRoom] = useState({
    width: 5,
    height: 5,
    x: 0,
    y: 1,
  });
  const changeData = (e) => {
    let temp = { ...newRoom, [e.target.name]: e.target.value };
    setNewRoom(temp);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <label>Width:</label>
        <input
          type="number"
          name="width"
          value={newRoom.width}
          onChange={changeData}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label>Height:</label>
        <input
          type="number"
          name="height"
          value={newRoom.height}
          onChange={changeData}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label>X:</label>
        <input type="number" name="x" value={newRoom.x} onChange={changeData} />
      </div>
      <div style={{ display: "flex" }}>
        <label>Y:</label>
        <input type="number" name="y" value={newRoom.y} onChange={changeData} />
      </div>
      <button onClick={() => addRoom(newRoom)}>Add</button>
    </>
  );
};
