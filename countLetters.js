//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//COUNTLETTERS FUNCTION
const countLetters = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  for (const letter of sentence) {
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = 0;
      }
      results[letter]++;
    }
  }
  return results;
};

//console.log(countLetters("Lighthouse in the house"));

//TEST CODE
assertEqual(countLetters("lighthouse in the house").h, 4);
