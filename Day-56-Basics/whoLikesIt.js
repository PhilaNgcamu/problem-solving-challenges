function likes(names) {
  if (!names.length) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names.join(" and ")} like this`;
  if (names.length === 3)
    return `${names.slice(0, 2).join(", ")} and ${
      names.slice(-1)[0]
    } like this`;
  if (names.length >= 4)
    return `${names.slice(0, 2).join(", ")} and ${
      names.slice(2).length
    } others like this`;
}

// 1. How can we restate the problem, in your own words?
// -- We return the correct string format for the length of the array

// 2. What are the inputs that go into the problem?
// -- Array of Names

// 3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)
// -- if the length of array is zero --> no one likes this
// -- if the length of array is 1 --> Peter likes this
// -- if the length of array is 2 --> Peter and Mike likes this
// -- if the length of array is 3--> Peter, John and Mike likes this
// -- if the length of array is 4 or more --> Alex, Jacob and 2 others like this

// 4. Break down the problem (pseudocode)
// -- if the length of array is zero --> no one likes this
// -- if the length of array is 1 --> Peter likes this
// -- if the length of array is 2 --> Peter and Mike likes this
// -- if the length of array is 3--> Peter, John and Mike likes this
// -- if the length of array is 4 or more --> Alex, Jacob and 2 others like this

// 5. refactor the solved problem (if possible)
