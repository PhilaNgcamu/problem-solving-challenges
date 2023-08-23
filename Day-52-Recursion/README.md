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

<h2>Helper Method Recursion</h2>

- This is useful when we create an empty array where we will store the data in and then call the helper function.
- The reason for it is that every time the main function is called it resets the array to an empty array. So, we need a helper function to collect data for use without the main function resetting the array to an empty one.
- So basically we have an outer function which is not recursive and inner/helper recursive function which is called every time until it stopped. Example:

```
function outer(input) {
    const outerScopedVariable = [];

    function helper(helperInput) {
        // Modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input);

    return outerScopedVariable;
}
```
