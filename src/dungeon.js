const { equipmentSets, sortEquipmentSets } = require("./equipmentSets");
const { _, it } = require("param.macro");
const { createPlayer } = require("./fighter");
const { playGame } = require("./game");

const generatePlayers = items =>
  items |> equipmentSets |> sortEquipmentSets |> it.map(createPlayer(100, _));

const findFirstWinningPlayer = (players, boss) => {
  const playerIndex = players.findIndex(player => {
    const freshBoss = { ...boss };

    const winner = playGame(player, freshBoss);

    return winner.kind === "player";
  });

  if (playerIndex > -1) return [playerIndex, players[playerIndex]];
};

/* eslint-disable-next-line */
module.exports = { generatePlayers, findFirstWinningPlayer };
