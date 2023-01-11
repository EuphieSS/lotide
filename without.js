//WITHOUT FUNCTION
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let item of source) {
    if (itemsToRemove.includes(item) === false)
    newArr.push(item);
  }
  return newArr;
}

//ARRAY COMPARISON FUNCTION
const eqArrays = function(arr1, arr2) {
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
}

//ASSERTION FUNCTION FOR ARRAY COMPARISON
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//TEST CASE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);