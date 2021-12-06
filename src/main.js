const R = require("ramda");
const { _, it } = require("param.macro");

function main() {
  "Hello," |> console.log(_, "world!");

  [1, 2, 3] |> R.sum |> console.log;

  3 |> [it, it, it] |> R.sum |> console.log;
}

main();
