const equipmentSets = ({ weapons, armors, rings }) =>
  weapons
    .map(wpn => {
      return [
        { weapon: wpn },
        rings.map(rng1 => {
          return [
            { weapon: wpn, rings: [rng1] },
            rings
              .filter(rng2 => rng2 !== rng1)
              .map(rng2 => {
                return { weapon: wpn, rings: [rng1, rng2] };
              }),
          ];
        }),
        armors.map(arm => {
          return [
            { weapon: wpn, armor: arm },
            rings.map(rng1 => {
              return [
                { weapon: wpn, armor: arm, rings: [rng1] },
                rings
                  .filter(rng2 => rng2 !== rng1)
                  .map(rng2 => {
                    return { weapon: wpn, armor: arm, rings: [rng1, rng2] };
                  }),
              ];
            }),
          ];
        }),
      ];
    })
    .flat(Infinity);

const calculateCostOfSet = set =>
  set.weapon.cost +
  (set.armor?.cost ?? 0) +
  (set.rings?.reduce((acc, { cost }) => cost + acc, 0) ?? 0);

const sortEquipmentSets = sets =>
  [...sets].sort((a, b) => calculateCostOfSet(a) - calculateCostOfSet(b));

/* eslint-disable-next-line */
module.exports = { equipmentSets, sortEquipmentSets };
