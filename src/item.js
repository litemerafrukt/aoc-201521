// Weapons:    Cost  Damage  Armor
// Dagger        8     4       0
// Shortsword   10     5       0
// Warhammer    25     6       0
// Longsword    40     7       0
// Greataxe     74     8       0

// Armor:      Cost  Damage  Armor
// Leather      13     0       1
// Chainmail    31     0       2
// Splintmail   53     0       3
// Bandedmail   75     0       4
// Platemail   102     0       5

// Rings:      Cost  Damage  Armor
// Damage +1    25     1       0
// Damage +2    50     2       0
// Damage +3   100     3       0
// Defense +1   20     0       1
// Defense +2   40     0       2
// Defense +3   80     0       3

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
    armor: 2,
  },
  {
    kind: "armor",
    name: "chainmail",
    cost: 31,
    armor: 1,
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
