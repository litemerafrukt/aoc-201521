const { toIncludeSameMembers } = require("jest-extended");
expect.extend({ toIncludeSameMembers });
const { equipmentSets } = require("./equipmentSets");

describe("equipmentSets", () => {
  test("that we have an equipment set that contains a dagger only", () => {
    const weapons = ["dagger"];
    const armors = [];
    const rings = [];
    expect(equipmentSets({ weapons, armors, rings })).toEqual([
      {
        weapon: "dagger",
      },
    ]);
  });

  test("that we have an equipment set that contains more stuff", () => {
    const weapons = ["dagger"];
    const armors = ["ringmail"];
    const rings = ["golden ring"];

    expect(equipmentSets({ weapons, armors, rings })).toIncludeSameMembers([
      {
        weapon: "dagger",
      },
      {
        armor: "ringmail",
        weapon: "dagger",
      },
      {
        armor: "ringmail",
        rings: ["golden ring"],
        weapon: "dagger",
      },
      {
        rings: ["golden ring"],
        weapon: "dagger",
      },
    ]);
  });
});
