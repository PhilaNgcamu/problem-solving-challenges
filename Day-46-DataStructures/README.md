# A Common Sense Guide: Data Structures and Algorithms

- As you gain more experience as a developer, you learn more about the _*quality*_ of the code. By quality, I mean code maintainability, which involves organisation, readability, and modularity and most importantly, code efficiency.

<h2>Code Efficiency</h2>

Take a look at these two version of code below.

```
**function printNumbersVersionOne() {
    let num = 2;
    while (num <= 100) {
        if(num % 2 === 0) {
            console.log(num)
        }
    num++;
    }
}
```

```
function printNumbersVersionTwo() {
    let num = 2;
    while (num <= 100) {
        console.log(num)
    num += 2;
    }
}**
```

- As you may have guessed that `printNumbersVersionTwo()` function runs 2 times faster than `printNumbersVersionOne()`, which is correct because the first version of the loop runs 100 times, while the second version runs 50 times.

<h1>Data Structures</h1>

- _Data structures_ refer to how data (input) is organized. You are going to learn how the
  same data can be organized in a variety of ways. Here's an example below:

```
const x = "Hello! "
const y = "How are you "
const z = "today?"
console.log(x + y + z)
```

- This simple program deals with three pieces of data, outputting three strings to make one coherent message. If we were to describe how the data is organized in this program, we’d say that we have three independent strings, each contained within a single variable.

- The code organisation is used for organisation's sake but to improve on how the code runs.
- If you have a solid grasp of data structures' perfomance, then you'll know how to write efficient and elegant code. So youhave to know different tools of a data structure to analyse perfomance.

<h2>The Array: The Foundational Data Structure</h2>

- The array is one of the most basic data structures in computer science.

- Let's take a look on an example of an array: `array = ["apples", "bananas", "cucumbers", "dates", "elderberries"]`
- The _size_ of the array is how many data elements are there, which is five. Therefore the size of the array is five.
- The _index_ of an array is the number that identifies where a piece of data lives
  inside the array =>

```
         index 0    index 1     index 2
array = ["apples", "bananas", "cucumbers",
 index 3      index 4
 "dates", "elderberries"]
```

<h2>Data Structure Operations</h2>

- To understand the perfomance of a data structure, we need to analyse the common ways our code might interact with that data structure.
- This involves, **reading/accessing, serching, inserting, deleting**.

<h2>Measuring Speed</h2>

- When we measure how "fast" the algorithm or operation takes, we measure in how many steps it takes, not time because because it's unreliable.
- If Operation A takes 5 steps and Operation B takes 500 steps to complete, then Operation A is always faster then Operation A.
- Measuring speed of an operation is known as meausring time complexity.
- The terms, **runtime, perfomance, efficiency, speed and efficiency** refers to the number of steps a given operation takes.
- **Reading**: The computer is capable of finding the data element inside the array in just one step without searching by using indexing (or by memory address, in computer terms). Big O in time complexity: O(1). Here's an example below:

`array = ["apples", "bananas", "cucumbers", "dates", "elderberries"]`

```
1. The array begins with index 0, which is at memory address 1010.
2. Index 3 will be exactly three slots past index 0.
3. By logical extension, index 3 would be located at memory address 1013,
since 1010 + 3 is 1013.
```

- **Searching**: _This is an inverse of reading_, meaning, reading means providing an index and return a value. While searching means providing the computer a value and return the index of that value's location. Searching can be time consuming since the computer has to search for a long time for a value in some cases. Big O in time complexity: It depends, it might be O(1) or O(n) or any.

> Note: This is an important fact about computers: a computer has immediate access to all of its **memory addresses**, but it has no idea offhand what values/data elements are contained at each memory address. Therefore, to search for a value within the array, the computer has no choice but to inspect each cell one at a time.

- For example, let's find "dates" in this array, `array = ["apples", "bananas", "cucumbers", "dates", "elderberries"]`. The computer will search the array from index 0 to 3 (where the "dates" is), and not to index 4 because it found where "dates" is. Therefor it took 4 steps/opeartions to find it.This is called **linear search**. Another way of saying this is that for N cells in an array, linear search would take a maximum of N steps.
- This is called **linear search**.

- **Insertion**: The efficiency of inserting a new piece of data into the array depends on where within the array you're inserting.
- If we want to add a new value at the end of the array, it takes one step because the computer always keeps track of the size of the array. It also knows at which memory address the array begins. If the array begins at memory address 1010 and is of size 5, that means its final memory address is 1014. So, to insert an item beyond that would mean adding it to the next memory address, which is 1015.
- If we want to insert a new value between values at a specific. The values at the right will move to new memory addresses(indexes) and then the value will settle to its desired index.
- Therefore, the computer takes account of how many steps it took to shift elements to the right and then adding a new value.
- The worst-case scenario for insertion into an array is that the scenario in which insertion takes the most steps — is when we insert data at the _beginning_ of the array beacuse we have to move all values one cell to the right to insert a new value.
- Therefore, we can say that insertion in a worst-case scenario can take N + 1 steps for an array containing N elements.
- Big O in time complexity: It depends, it might be O(1) or O(n) or any.

- **Deletion**: Removing an element from an array at an index.
- When we delete a value at an index between values, the values on the right are shifted one cell to the left.
- The worst-case scenario of deleting an element is deleting the very first element of the array. This is because index 0 would become empty, and we’d have to shift all the remaining elements to the left to fill the gap. We can say then, that for an array containing N elements, the maximum number of steps that deletion would take is N steps.
- Big O in time complexity: It depends, it might be O(1) or O(n) or any.

<h2>Sets: How a Single Rule Can Affect Efficiency</h2>

- A _set_ is a data structure that does not allow duplicate values to be contained within it.
- There are different types of sets but let's focus on the array-based set.
- The difference between a set and an array is that the set never allows duplicate values to be inserted into it.
- For example, if you had the set ["a", "b", "c"] and tried to add another "b", the computer just wouldn’t allow it, since a "b" already exists within the set.
- Therefore, sets are useful when you need to ensure that you don't have duplicate data.
- It's similar in operation compare to an array in reading, searching and deletion.
- But in **inserting** operation, the computer needs to search if the value doesn't exist and then insert the value.
- Inserting a value at the end of a set is the best-case scenario, a set will take up to N + 1 steps for N elements.
- In the worst-case scenario, where we’re inserting a value at the beginning of a set, the computer needs to search N cells to ensure that the set doesn’t already contain that value, another N steps to shift all the data to the right, and another final step to insert the new value. That’s a total of 2N + 1 steps. Contrast this to insertion into the beginning of a regular array, which only takes N + 1 steps.

<h1>Why Algorithms Matter</h1>

- An algothm refers to the set of instructions given to a computer to achieve a particular task. When we write code, we are creating algorithms for the computer to follow and execute.

- We can use a linear search algorithm to search a value in an **ordered** array. If we find a value can stop search. This is similar to a regular array but there may be nuances in efficiency in each.

<h2>Binary Search</h2>

- Binary search is only possible in an ordered array. If we want a value, the algorithm that starts searching at the middle of the array, it may go lower of the 1/4 percentile of the array or higher of the 3/4 percentile of the array, and then eliminating the other half of the array.
- Here's an example: `const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. Let's search for number "3". The algorithm will search at index 5, then check if 5 === 3, but 3 < 5, so the algorithm will go lower to 2, then check if 3 === 2, but 3 < 2, then go lower to 1, then check if 1 === 3, but 1 < 3, then higher to 2, then check if 2 === 3, but 2 < 3, then higher to 3, then check if 3 === 3, YES! Then stop the execution.
