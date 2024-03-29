// The instructor object based on Big o:
// - Insertion - O(1)
// - Removal - O(1)
// - Searching - O(N)
// - Access - O(1)

const instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favouriteNumbers: [1, 2, 3, 4],
};

// The names array:
const names = ["Philasande", "Happy", "Ngcamu"];
// Insertion - It depends, if I want to insert a value at the beginning of the array then the perfomance will be slower than adding it at the end because the array re-initializes indeces to values.
// Removal - It depends, if I want to remove a value from the array then the perfomance will be slower because the array re-initializes indeces to values.
// Searching - O(N)
// Access - O(N)
