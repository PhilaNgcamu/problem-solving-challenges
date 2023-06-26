# JavaScript Algorithms and Data Structures Masterclass on Udemy.

Link to [JavaScript Algorithms and Data Structures Masterclass on Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

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
