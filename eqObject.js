//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//EQ_OBJECTS FUNCTION
const eqObjects = function(object1, object2) {
  let objectKey1 = Object.keys(object1);
  let objectKey2 = Object.keys(object2);
  if (objectKey1.length !== objectKey2.length) {
    return false;
  } else {
    let match = false;
    //match variable added in order for the for loop to run properly
    //otherwise the loop stops once the if statement is executed
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

//TEST CASES
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);

assertEqual(eqObjects({ a: "1", b: 3 }, { b: 2, a: "1" }), false);
assertEqual(eqObjects({ a: "1", b: 2 }, { b: 2, a: "1" }), true);