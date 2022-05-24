// Lost Without a Map
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function doubledValue(array) {

    const double = array.map(number => number * 2)
    return double
}
console.log(doubledValue([1, 2, 3]))