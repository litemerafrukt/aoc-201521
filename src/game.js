const { dealDamage, isDead } = require("./fighter");

const turn = (hitter, toBePunched) => {
  const damaged = dealDamage(hitter, toBePunched);

  return [hitter, damaged];
};

const isGameOver = (fighterOne, fighterTwo) =>
  isDead(fighterOne) || isDead(fighterTwo);

const takeTurns = (hitter, punched) => {
  const [toBePunched, nextToHit] = turn(hitter, punched);

  console.log({ toBePunched, nextToHit });
  if (isGameOver(toBePunched, nextToHit)) {
    return isDead(nextToHit) ? toBePunched : nextToHit;
  }

  return takeTurns(nextToHit, toBePunched);
};

const playGame = (player, boss) => takeTurns(player, boss);

/* eslint-disable-next-line */
module.exports = { playGame };
