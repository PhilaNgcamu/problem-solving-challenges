# Dynamic Programming

<h2>Dynamic Programming</h2>

- A method for solving a complex problem by breaking it down into a collection of simpler sub-problems, solving each of those sub-problems just once, and storing their solutions
- OR, "remembering old values" from similar sub-problems

- It only works on problems with...
  - Optimal substructure - If an optimal solution can be constructed from optimal solutions of its sub-problems
  - Overlapping sub-problems - Problems that can be broken down into sub-problems, which are reused several times

<h2>Memoization</h2>

- Storing the results of expensive function calls and returning the cached result when the same inputs occur again

<h2>Tabulation</h2>

- Storing the result of a previous result in a "table" (usually an array)
- Usually done using **iteration**
- Better **space complexity** can achieved using tabulation
