export let divGridData = [
  { id: 0, x: 3, y: 2, width: 5, height: 5, color: "darkgreen" },
  { id: 1, x: 5, y: 6, width: 5, height: 5 },
];

export const roomData = (offset = 10) => {
  const x = divGridData.map((room) => {
    return { ...room, x: room.x + offset, y: room.y + offset };
  });
  return x;
};
