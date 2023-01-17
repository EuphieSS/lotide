# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @EuphieSS/lotide`

**Require it:**

`const _ = require('@EuphieSS/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns 1 for [1, 2, 3].
* `tail(arr)`: returns 2, 3 for [1, 2, 3].
* `middle(arr)`: returns [] for [1] or [1, 2]; [2] for [1, 2, 3]; [2, 3] for 
*                  [1, 2, 3, 4].
* `assertArraysEqual(actual, expected)`: test function for eqArrays.
* `assertEqual(actual, expected)`: test function for functions with primitive 
*                                  values as output.
* `assertObjectsEqual(actual, expected)`: test function for eqObject.
* `countLetters(str)`: returns the count of each letter in the string.
* `countOnly(allItems, itemsToCount)`: returns the count of item(s) in allItems,
*                                      specified in itemsToCount. Returns 
*                                      unidentified if item not specified.
* `eqArrays(arr1, arr2)`: compares two arrays and return true or false.
* `eqObject(obj1, obj2)`: compares two objects and return true or false.
* `findKey(obj, callback)`: returns key based on the condition specified by
*                           the callback function.
* `findKeyByValue(obj, value)`: returns key of input value.
* `letterPositions(str)`: returns the indices of each letter in the string.
* `map(array, callback)`: returns a new array with results from the callback on 
*                         every element in the calling array.
* `takeUntil(array, callback)`: returns a new array with values taken 
*                               incrementally from the calling array until
*                               condition specified by the callback is met.
* `without(source, itemsToRemove)`: returns a new array with all elements from 
*                                   the source input expect element specified by
*                                   itemsToRemove.
