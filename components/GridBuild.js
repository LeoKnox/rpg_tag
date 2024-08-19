import { useState } from "react";

export default AddRoom = ({ addRoom }) => {
  const [newRoom, setNewRoom] = useState({
    width: 5,
    height: 5,
    x: 0,
    y: 1,
  });
  const changeData = (e) => {
    let temp = { ...newRoom, width: e.target.value };
    setNewRoom(temp);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <label>Width:</label>
        <input type="number" value={newRoom.width} onChange={changeData} />
      </div>
      <button onClick={() => addRoom(newRoom)}>Add</button>
    </>
  );
};
