const createBoss = (hitPoints, damage, armor) => ({
  kind: "boss",
  hitPoints,
  weapon: { damage },
  armor: { armor },
});

const createPlayer = (hitPoints, equipment) => ({
  kind: "player",
  hitPoints,
  ...equipment,
});

const isDead = fighter => fighter.hitPoints <= 0;

const getDamage = fighter => {
  const ringDamage =
    fighter.rings?.reduce((acc, ring) => acc + (ring?.damage ?? 0), 0) ?? 0;

  return fighter.weapon.damage + ringDamage;
};

const getArmor = fighter => {
  const ringArmor =
    fighter.rings?.reduce((acc, ring) => acc + (ring?.armor ?? 0), 0) ?? 0;

  return (fighter.armor?.armor ?? 0) + ringArmor;
};

const dealDamage = (dealer, receiver) => {
  const damage = do {
    const diff = getDamage(dealer) - getArmor(receiver);
    diff <= 0 ? 1 : diff;
  };

  return {
    ...receiver,
    hitPoints: receiver.hitPoints - damage,
  };
};

/* eslint-disable-next-line */
module.exports = {
  createBoss,
  createPlayer,
  isDead,
  dealDamage,
};
