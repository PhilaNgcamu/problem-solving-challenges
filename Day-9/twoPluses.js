//Hackerrank - A valid plus is defined here as the crossing of two segments (horizontal and vertical) of equal lengths. These lengths must be odd, and the middle cell of its horizontal segment must cross the middle cell of its vertical segment.

// In the diagram below, the blue pluses are valid and the orange ones are not valid.

const array = [
  ["B", "G", "B", "B", "G", "B"],
  ["G", "G", "G", "G", "G", "G"],
  ["B", "G", "B", "B", "G", "B"],
  ["G", "G", "G", "G", "G", "G"],
  ["B", "G", "B", "B", "G", "B"],
  ["B", "G", "B", "B", "G", "B"],
];

//valid pluses

console.log(array[3][0]);
console.log(array[3][1]);
console.log(array[3][2]);
console.log(array[3][3]);
console.log(array[3][4]);
console.log(array[3][5]);
console.log(array[4][1]);
console.log(array[4][4]);
console.log(array[5][1]);
console.log(array[5][4]);

console.log(array[0][1]); //1
console.log(array[1][0]); //1
console.log(array[1][1]); //1
console.log(array[1][2]); //1
console.log(array[2][1]); //1

console.log(array[0][4]); //2
console.log(array[1][3]); //2
console.log(array[1][4]); //2
console.log(array[1][5]); //2
console.log(array[2][4]); //2
