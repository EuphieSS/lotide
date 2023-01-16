const assertEqual = require("./assertEqual");

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


module.exports = eqArrays;