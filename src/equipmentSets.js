const { cartesian } = require("./cartesian");
const R = require("ramda");

const equipmentSets = ({ weapons, armors, rings }) =>
  cartesian([
    weapons,
    [undefined, ...armors],
    [undefined, ...rings],
    [undefined, ...rings],
  ])
    .filter(
      ([, , ring1, ring2]) =>
        ring1 === undefined || ring2 === undefined || ring1 !== ring2,
    )
    .map(set => {
      const [weapon, armor, ring1, ring2] = set;
      const rings = [ring1, ring2].filter(Boolean);
      const hasRing = rings.length > 0;

      return {
        weapon,
        ...(armor && { armor }),
        ...(hasRing && { rings }),
      };
    }) |> R.uniq;

const calculateCostOfSet = set =>
  set.weapon.cost +
  (set.armor?.cost ?? 0) +
  (set.rings?.reduce((acc, { cost }) => cost + acc, 0) ?? 0);

const sortEquipmentSets = sets =>
  [...sets].sort((a, b) => calculateCostOfSet(a) - calculateCostOfSet(b));

/* eslint-disable-next-line */
module.exports = { equipmentSets, calculateCostOfSet, sortEquipmentSets };
