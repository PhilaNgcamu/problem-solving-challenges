# Problem Solving: Day 53 - Udemy - JavaScript Algorithms and Data Structures Masterclass

<h1>Searching Algorithms</h1>

<h2>Linear Search</h2>

- Linear Search: Search for data one at a time. Example: Let's search for 12 in this given array: [5, 8, 1, 100, 12, 3, 12].
- So, the algorithm will start at index 0 and check if a value is 12, if not move to the next index and so on to find 12. If it's found/not found then return a relevant result.
- Linear Search Big O: Remember that in Big O, a general trend of the graph or the worst case scenario.

<h2>Binary Search<h2>

- Binary search is a much faster form of a search.
- Rather than eliminating one element at a time, eliminate "half" of the remaining element in a **sorted array**.
- It only works in sorted arrays.
- Divide and Conquer.

> Note: If the array is not sorted use linear search or if the array is sorted, use binary search.

<h2>Binary Search Big O<h2>

- Let's have an array of 32 elements. Let's do a visualization of binary search: [1, 2, 3, 4 ,5, 7, 8, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35]
- [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35]
- [25, 26, 27, 28, 29, 30, 32, 35]
- [29, 30, 32, 35]
- [32, 35]
- [**32**, 35] --> Found 32. Yay!
- 32 elements = 5 "steps"/operations (worst case scenario)
- By doubling the elements to 64, then a 6th "step" or operation is added.
- Ultimately, Binary search has a time complexity of log base 2 of N --> O(log N)
