const assertObjectsEqual = require("../assertObjectsEqual");

//TEST CASES
assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
assertObjectsEqual({ a: "1", b: 3 }, { b: 2, a: "1" });