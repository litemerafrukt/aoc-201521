const { items } = require("./items");
const { calculateCostOfSet } = require("./equipmentSets");
const { generatePlayers, findFirstWinningPlayer } = require("./dungeon");
const { createBoss } = require("./fighter");

function main() {
  const players = generatePlayers(items);
  console.log("Sending", players.length, "players to the dungeon.\n");

  const [playerIndex, player] = findFirstWinningPlayer(
    players,
    createBoss(100, 8, 2),
  );

  if (!player) {
    console.log("Boss won all fights.");
  } else {
    console.log(
      "Player number",
      playerIndex,
      "was the first to win against the boss.",
    );
    console.log("Equipment cost:", calculateCostOfSet(player), "gold.");
    console.log(
      "Equipment:",
      JSON.stringify(
        {
          weapon: player.weapon,
          armor: player.armor,
          rings: player.rings ?? [],
        },
        null,
        2,
      ),
    );
  }

  console.log("\nThe end!");
}

main();
