# Problem Solving: Day 52 - Udemy - JavaScript Algorithms and Data Structures Masterclass

<h1>Recursion</h1>

<h2>What is recursion</h2>

- A process (function) that calls itself.

<h2>The call stack</h2>

- It's a **stack** data structure.
- Anytime a function is invoked, it is placed (**pushed**) on the top of the stack.
- When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**).
- An example in [callStack.js](callStack.js)

<h2>How recursive functions work</h2>

- Invoke the **same** function with a different input until you reach your base case.
- Base case - The condition when the recursion ends (it's important).
- **Two essential parts of a recursive function**: Base case and different input.

<h2>Common recursion pitfalls</h2>

- If there's no base case, the function will not stop calling itself until the terminal shows the error, which may lead to stack overflow.
- Forgetting to return or returning the wrong thing
