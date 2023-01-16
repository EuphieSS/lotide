const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let resultArray = [];
  let midIndex = array.length / 2;
  if (array.length <= 2) {
    return resultArray;
  }
  if (array.length % 2 === 0) {
    resultArray.push(array[midIndex - 1], array[midIndex]);
    return resultArray;
  } else {
    resultArray.push(array[Math.floor(midIndex)]);
    return resultArray;
  }
}


module.exports = middle;