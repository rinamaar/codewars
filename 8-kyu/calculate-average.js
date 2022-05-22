// Calculate average

// Write a function which calculates the average of numbers in a given list.

// Note: Empty arrays should return 0.


// 1st solution

// function findAverage(array) {
//     if (array.length === 0) {
//         return 0
//     } else {
//         const average = array.reduce((a, b) => a + b) / array.length
//         return average
//     }
// }
// console.log(findAverage([]))


// 2nd solution

// function findAverage(array) {
//     if (array.length == 0) {
//         return 0
//     } else {
//         let total = 0
//         for (let i = 0; i < array.length; i++) {
//             total += array[i]
//         }
//         let average = total / array.length
//         return average
//     }
// }
// console.log(findAverage([1, 2, 3]))