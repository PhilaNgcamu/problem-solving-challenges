// For this challenge you will compute the length of the longest increasing subsequence.
// have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is[3, 5, 6], and another is[1, 6].For this input, your program should return 3 because that is the length of the longest increasing subsequence.
function LongestIncreasingSequence(arr) {
  const dp = Array(arr.length).fill(1);
  let maxLength = 1;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        console.log(dp[j]);
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
}
console.log(LongestIncreasingSequence([4, 3, 5, 1, 6]));
