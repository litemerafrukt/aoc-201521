const { items } = require("./items");
const { equipmentSets } = require("./equipmentSets");

function main() {
  const allSets = equipmentSets(items);

  console.log(allSets);
}

main();
