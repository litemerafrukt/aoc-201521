const weapons = [
  {
    kind: "weapon",
    name: "dagger",
    cost: 8,
    damage: 4,
  },
  {
    kind: "weapon",
    name: "shortsword",
    cost: 10,
    damage: 5,
  },
  {
    kind: "weapon",
    name: "warhammer",
    cost: 25,
    damage: 6,
  },
  {
    kind: "weapon",
    name: "longsword",
    cost: 40,
    damage: 7,
  },
  {
    kind: "weapon",
    name: "greataxe",
    cost: 74,
    damage: 8,
  },
];

const armors = [
  {
    kind: "armor",
    name: "leather",
    cost: 13,
    armor: 1,
  },
  {
    kind: "armor",
    name: "chainmail",
    cost: 31,
    armor: 2,
  },
  {
    kind: "armor",
    name: "splintmail",
    cost: 53,
    armor: 3,
  },
  {
    kind: "armor",
    name: "bandedmail",
    cost: 75,
    armor: 4,
  },

  {
    kind: "armor",
    name: "platemail",
    cost: 102,
    armor: 5,
  },
];

const rings = [
  { kind: "ring", name: "damage ring", cost: 25, damage: 1 },
  { kind: "ring", name: "damage ring", cost: 50, damage: 2 },
  { kind: "ring", name: "damage ring", cost: 100, damage: 3 },
  { kind: "ring", name: "defense ring", cost: 20, armor: 1 },
  { kind: "ring", name: "defense ring", cost: 40, armor: 2 },
  { kind: "ring", name: "defense ring", cost: 80, armor: 3 },
];

/* eslint-disable-next-line */
module.exports = { items: { weapons, armors, rings } };
