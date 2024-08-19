import { useState } from "react";

export default AddRoom = () => {
  const [newRoom, setNewRoom] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  return (
    <div style={{ display: "flex" }}>
      <label>Width:</label>
      <input type="number" value={newRoom.width} />
    </div>
  );
};
