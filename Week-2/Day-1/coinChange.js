// // Problem: Coin Change
// // You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have an infinite number of each kind of coin.

// function coinChange(coins, amount) {
//   // DP
//   let arr = new Array(amount + 1).fill(0);
//   console.log(arr);
//   // Base case
//   arr[0] = 1;
//   // traverse the coins array
//   for (let i = 0; i < coins.length; i++) {
//     //traverse the amount
//     for (let j = coins[i]; j <= amount; j++) {
//       arr[j] += arr[j - coins[i]];
//     }
//   }
//   return arr;
// }
// console.log(coinChange([1, 2, 5], 5));
