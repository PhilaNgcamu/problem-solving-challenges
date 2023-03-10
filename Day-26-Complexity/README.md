<h1>Introduction to Complexity</h1>

- The Rules:
  - The input (n) >= 0 always!
  - Functions do more work for more input.
  - We have to drop all constants. Example, if the given expression is `3n` then drop the constant (3) to be `n` because we only care about the time taken of the algorithm.
  - For logarithms, we drop the base.
  - We use a constant (c) or 1 which is independent of n

<h2>Complexity: Big Oh Notation</h2>

- There are some algotithms that takes less time as the number of inputs increases than others. That means that are faster. Therefore, wer are interested in the speed of algorithms.

- When you look at the Big Oh Notation graph, it will have the **Big Theta**: Fair rate speed, Big O: Fair rate speed or faster rate speed, Big Omega: Fair rate speed or slower rate speed, little O: faster rate speed and little Omega: slower rate speed. Reference: [Big O Chart](https://www.bigocheatsheet.com/).

- Big O establishes a worst-case run time.

- Example: Let's say we have 1000 inputs in the algorithms of **_n log n_** and **_n^4/3_**. Therefore, 1000 inputs in **_n log n_** is 3000 which is the time taken of the algorithm at that point and 1000 inputs in **_n^4/3_** is 10000 which is the time taken of the algorithm at that point. Therefore, O(**_n log n_**) is much faster than O(**_n^4/3_**)
