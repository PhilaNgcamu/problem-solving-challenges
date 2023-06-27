# JavaScript Algorithms and Data Structures Masterclass on Udemy.

Link to [JavaScript Algorithms and Data Structures Masterclass on Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

<h2> Introduction to Big O Notation </h2>

```
function printAllPairs(n) {
  // Outer for loop no. of operation is O(n)
  for (let i = 0; i < n; i++) {
    // Inner for loop no. of operation is O(n)
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  // Therefore the whole function's runtime is O(n^2)
}

printAllPairs(10);
```

```
// The logAtLeast5 function: This is O(n) beacuse as the n-inputs increases the runtime/no. of operations increases proportionaly.
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// The logAtMost5 function: This is O(1) beacuse as the n-inputs increases the runtime/no. of operations remains constant
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```
