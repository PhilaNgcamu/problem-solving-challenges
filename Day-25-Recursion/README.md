<h1>Learn Recursion</h1>

<h2>How to identify if a problem would be solved recursively?</h2>

- Practice, practice, practice!
- See if the smaller version can be solved to figure out if a problem can be solved recursively.
- Therefore, if it forms a pattern - it is called a recurrence relation (in some problems), which helps us find the next term if we have the previous term.
- The base condition is when we know the term that is already equal to a known answer.

<h2>Best approach for Recursion Problems</h2>

**_Important to understand any recursive problem before doing code_**

- Identify if you can break down the problem into smaller problems.
- Write the recurrence relation, if needed.
- Draw the recursive tree.
- About the tree:
  - Identify the flow of the functions - how they are getting in the memory stack.
  - Identify & focus on _left tree calls_ and _right tree calls_ by **using pen and paper**
  - Use a debugger to see the flow.
- Identfy **how the values are returned and its types** in each step with the flow in mind. Ultimately, you'll have the solution of the first execution of the function.
