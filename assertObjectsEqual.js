//EQUAL_ARRAY FUNCTION
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

//EQUAL_OBJECTS FUNCTION
const eqObjects = function(object1, object2) {
  let objectKey1 = Object.keys(object1);
  let objectKey2 = Object.keys(object2);
  if (objectKey1.length !== objectKey2.length) {
    return false;
  } else {
    let match = false;
    for (let key of objectKey1) {
      if (object1[key].length >= 2) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      } else {
        match = true;
      }
    }
    return match;
  }
};

//ASSERT_OBJECT_EQUAL_FUNCTION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CASES
assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
assertObjectsEqual({ a: "1", b: 3 }, { b: 2, a: "1" });