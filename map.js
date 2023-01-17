//ARRAY COMPARISON FUNCTION
const eqArrays = function(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let finalOutput = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        finalOutput = true;
      }
    }
    return finalOutput;
  }
};

//ASSERTION FUNCTION FOR ARRAY COMPARISON
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//MAP FUNCTION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


//TEST CASE
assertArraysEqual(map([1, 2, 3], num => num * 10), [10, 20, 30]);
assertArraysEqual(map(["wolf", "owl", "worm"], word => word[0].toUpperCase()), ["W", "O", "W"]);
assertArraysEqual(map(["m", "n"], i => i + "i"), ["mi", "ni"]);