import { key } from "../utils";

const fifthMoveCombinations = new Map();

// empty center

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    ["x", " ", " "],
    ["x", " ", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "x", "o"],
    [" ", " ", " "],
    [" ", "x", " "],
  ]),
  "1.1"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    ["x", " ", "x"],
    [" ", " ", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    ["x", " ", " "],
    [" ", "x", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    ["x", " ", " "],
    [" ", " ", "x"],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", " ", " "],
    ["x", "x", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", " ", " "],
    ["x", " ", "x"],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", " ", "x"],
    ["x", " ", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", " ", "x"],
    [" ", "x", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", " ", " "],
    [" ", "x", "x"],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", " ", "x"],
    [" ", " ", "x"],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", "x"],
    [" ", " ", " "],
    [" ", " ", "x"],
  ]),
  "1.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", "x"],
    ["x", " ", " "],
    [" ", " ", " "],
  ]),
  "1.1"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", "x"],
    [" ", " ", " "],
    ["x", " ", " "],
  ]),
  "1.1"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", " "],
    ["x", " ", " "],
    ["o", "x", " "],
  ]),
  "1.1"
);

fifthMoveCombinations.set(
  key([
    ["o", "x", "o"],
    [" ", " ", " "],
    ["x", " ", " "],
  ]),
  "2.2"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    ["x", " ", "x"],
    [" ", " ", " "],
  ]),
  "0.1"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    ["x", " ", " "],
    ["x", " ", " "],
  ]),
  "0.1"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    ["x", " ", " "],
    [" ", "x", " "],
  ]),
  "0.1"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    ["x", " ", " "],
    [" ", " ", "x"],
  ]),
  "0.1"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    [" ", " ", " "],
    ["x", "x", " "],
  ]),
  "0.1"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    [" ", " ", " "],
    ["x", " ", "x"],
  ]),
  "0.1"
);

// x centered

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", "x", " "],
    ["x", " ", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    ["x", "x", " "],
    [" ", " ", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", "x", " "],
    [" ", "x", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", "x", " "],
    [" ", " ", "x"],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", "x", "x"],
    [" ", " ", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", " "],
    ["x", "x", " "],
    [" ", "o", " "],
  ]),
  "1.2"
);

fifthMoveCombinations.set(
  key([
    ["o", "x", " "],
    [" ", "x", " "],
    [" ", "o", " "],
  ]),
  "2.0"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "x"],
    [" ", "x", " "],
    [" ", "o", " "],
  ]),
  "2.0"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", "x", "x"],
    [" ", "o", " "],
  ]),
  "1.0"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", "x", " "],
    [" ", "o", "x"],
  ]),
  ["0.2", "2.0"]
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    ["x", "x", " "],
    [" ", " ", " "],
  ]),
  "0.1"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    ["x", "x", " "],
    [" ", " ", " "],
  ]),
  "0.1"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", "x", " "],
    ["x", "o", " "],
  ]),
  "0.2"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    [" ", "x", " "],
    ["x", " ", " "],
  ]),
  "0.1"
);

fifthMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", "x", "x"],
    [" ", " ", "o"],
  ]),
  "1.0"
);

fifthMoveCombinations.set(
  key([
    ["x", " ", "o"],
    [" ", "x", " "],
    ["o", " ", " "],
  ]),
  "2.2"
);

export default fifthMoveCombinations;
