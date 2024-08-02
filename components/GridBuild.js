export default GridBuild = () => {
  const gridBuildStyle = {
    color: "slate",
    width: "5ch",
  };
  return (
    <div>
      <div style={gridBuildStyle}>
        <label>Width: </label>
        <input type="number" size="3" />
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
