import { useState } from "react";

export default AddRoom = ({ addRoom }) => {
  const [newRoom, setNewRoom] = useState({
    width: 5,
    height: 5,
    x: 0,
    y: 1,
  });
  return (
    <div style={{ display: "flex" }}>
      <label>Width:</label>
      <input type="number" value={newRoom.width} />
      <button onClick={addRoom}>Add</button>
    </div>
  );
};
