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
}


//ASSERTION FUNCTION FOR ARRAY COMPARISON
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//MIDDLE FUNCTION
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

//TEST CODE
assertArraysEqual(middle([1,]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);