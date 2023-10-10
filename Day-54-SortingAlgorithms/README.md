# Problem Solving: Day 54 - Udemy - JavaScript Algorithms and Data Structures Masterclass

<h1>Sorting Algorithms</h1>

<h2>What is sorting?</h2>

- It's a process of rearranging items in a list to achieve a desired order.
- Example: Sorting numbers in an ascending order.

<h2>Why do we need to learn this?</h2>

- Sorting is an incredibly common task, so it's good to know how it works.
- There many ways to sort things and they have their advantages and disadvantages.
- Must be aware of them in interviews.
- JavaScript has it's own built-in method to play around with when sorting the list.

<h2>Bubble Sort - Time Complexity of O(n^2)</h2>

- It's commonly not used and it's less efficient.
- A sorting algorithm is a process where the largest value _bubble up to the top_ each time.
- bubble up to the top - the largest value goes _up to the top_ by a single move one at a time.
- Example: We've got a list of unordered numbers that needs to ascend in order. Using the sorting algorithm, it will compare two numbers and the largest number will be swapped with it's compared number and so on.
- When the first iteration is done, the algorithm will continue starting from index 0 in a list until it reaches just before the sorted number.
- **Before we sort, we must swap!**. There's a swapping functionality in [sort.js](sort.js).

<h2>Bubble Sort Pseudocode</h2>

- Start looping from a variable called `i` at the end of the array towards the beginning.
- Start an inner loop with a variable called `j` from the beginning until `i - 1`.
- If `arr[j]` is greater than `arr[j + 1]`, swap those two values!
- Return the sorted array!
