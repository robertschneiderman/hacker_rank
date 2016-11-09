const crosswords = (grid, words) => {

  let slots = getSlots(grid);

  


};

const getSlots = (grid) => {

  let slots = [];

  grid.forEach((row, y) => {
    row.forEach((space, x) => { 
      if (space === '-') {
        let ho = hoLength(grid, y, x);
        let vert = vertLength(grid, y, x);
        pushSlot(ho, vert);
      }
    });
  });
  return slots;
};

const pushSlot = (ho, vert) => {
  if (ho > 1) {
    slots.push({origin: [y, x], length: ho});
  }
  if (vert > 1) {
    slots.push({origin: [y, x], length: vert});
  }
  if (ho === 1 && vert === 1) {
    slots.push({origin: [y, x], length: ho});
  }  
}

const hoLength = (grid, y, x) => {
  let count = 0;
  while (grid[y][x] === '-') {
    count++;
    x++
    grid[y][x];
  }
  return count;
};

const vertLength = (grid, y, x) => {
  let count = 0;
  while (grid[y][x] === '-') {
    count++;
    y++
    grid[y][x];
  }
  return count;
};