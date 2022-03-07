const cartesian = sets =>
  sets.reduce((acc, set) => acc.map(x => set.map(y => [...x, y])).flat(), [[]]);

/* eslint-disable-next-line */
module.exports = { cartesian };
