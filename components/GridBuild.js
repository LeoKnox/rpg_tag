export default GridBuild = () => {
  const gridBuildStyle = {
    color: "slate",
  };
  return (
    <div>
      <div style={gridBuildStyle}>
        <label>Width: </label>
        <input type="number" />
        <label>Height: </label>
        <input type="number" />
        <label>x: </label>
        <input type="number" />
        <label>y: </label>
        <input type="number" />
      </div>
    </div>
  );
};
