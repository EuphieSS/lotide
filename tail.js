//TAIL FUNCTION
const tail = function(array) {
  return array.slice(1);
};

//ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());
/* The assertion function is too simple to compare array values.
Turning the (result) array and the (expected) parameter to string
allows these two values to compare directly. */

//TEST CASE: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); //original array should still have 3 elements