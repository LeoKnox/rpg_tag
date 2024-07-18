import { useState } from "react";

export default Home = () => {
  const [columns, setColumns] = useState("repeat(4), 1fr)");
  const gridStyle = {
    color: "blue",
    gridTemplateColumns: { columns },
  };
  const playersState = [
    { id: 1, gridArea: "4/5", hp: 18, type: "user", token: "赤", name: "Aka" },
    { id: 2, gridArea: "4/4", hp: 18, type: "user", token: "青", name: "Ao" },
    {
      id: 3,
      gridArea: "5/5",
      hp: 18,
      type: "user",
      token: "緑",
      name: "Midori",
    },
    {
      id: 4,
      gridArea: "5/4",
      hp: 18,
      type: "user",
      token: "紫",
      name: "Murasaki",
    },
  ];
  return (
    <div>
      <h3>Home Page</h3>
      <div className="column" style={gridStyle}>
        <div className="aDiv item">x</div>
        <div className="bDiv item">x</div>
        <div className="aDiv item">x</div>
        <div className="bDiv item">x</div>
        <div className="aDiv item">x</div>
        <div className="bDiv item">x</div>
        <div className="aDiv item">x</div>
        <div className="bDiv item">x</div>
      </div>
    </div>
  );
};
