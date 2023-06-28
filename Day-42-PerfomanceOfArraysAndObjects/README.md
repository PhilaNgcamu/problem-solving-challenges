# JavaScript Algorithms and Data Structures Masterclass on Udemy.

Link to [JavaScript Algorithms and Data Structures Masterclass on Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

<h1>Analysing the performance of Objects and Arrays<h1>

<h2>Big O of Objects</h2>

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(1)

<h2>Big O of Object Methods</h2>

- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty - O(1)

<h2>Big O of Arrays</h2>

- Insertion - It depends, if I want to insert a value at the beginning of the array then the perfomance will be slower than adding it at the end because the array re-initializes indeces to values.
- Removal - It depends, if I want to remove a value from the array then the perfomance will be slower because the array re-initializes indeces to values.
- Searching - O(N)
- Access - O(N)

> NOTE: Push and Pop array methods are faster than Shift and Unshift

<h2>Big O of Array Operations</h2>

- Push, pop - O(1)
- Shift, unshift - O(N)
- sort - O(N \* log N)
- forEach/map/filter/reduce/etc. - O(N)
