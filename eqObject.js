const eqArrays = require("./eqArrays");

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


module.exports = eqObjects;