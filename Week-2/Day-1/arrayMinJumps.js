// // Using the JavaScript language, have the function arrayMinJumps(arr) take the array of integers stored in arr, where each integer represents the maximum number of steps that can be made from that position, and determine the least amount of jumps that can be made to reach the end of the array. For example: if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then your program should output the number 3 because you can reach the end of the array from the beginning via the following steps: 1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END. Both of these combinations produce a series of 3 steps. And as you can see, you don't always have to take the maximum number of jumps at a specific position, you can take less jumps even though the number is higher.

// // If it is not possible to reach the end of the array, return -1.

// function arrayMinJumps(arr) {
//   // Check if the array is empty
//   if (arr.length === 0) {
//     return -1;
//   }

//   // Initialize variables
//   let currentPosition = 0;
//   let jumps = 0;
//   let currentMaxReach = 0;
//   let nextMaxReach = 0;

//   // Iterate through the array
//   for (let i = 0; i < arr.length - 1; i++) {
//     nextMaxReach = Math.max(nextMaxReach, i + arr[i]);
//     console.log("Next Max Reach: " + nextMaxReach);
//     console.log("Current Max Reach: " + currentMaxReach);
//     console.log("i: " + i);
//     console.log("Jumps: " + jumps);
//     console.log("---------");

//     if (i === currentMaxReach) {
//       // If we reach the current maximum reachable position, update the maximum reachable position
//       currentMaxReach = nextMaxReach;
//       jumps++;
//     }

//     if (currentMaxReach >= arr.length - 1) {
//       // If we can reach the end of the array, return the number of jumps
//       return jumps;
//     }

//     if (i === currentPosition) {
//       // Update the current position to the current maximum reachable position
//       currentPosition = currentMaxReach;
//     }
//   }

//   // If we cannot reach the end of the array, return -1
//   return -1;
// }

// console.log(arrayMinJumps([1, 5, 4, 6, 9, 3, 0, 0, 1, 3])); // Output: 3

// //i = j + value
