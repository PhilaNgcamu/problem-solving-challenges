// Codewars > Elimination Tourney
const tourney = (array) => {
  //declare the output array to push arrays, where output at 0 == array
  const output = Math.ceil(Array(array.length / 2)).fill([]);
  output[0] = [...array];
  //while on the first index of the output, loop through the first array

  //--if arr[i] > arr[i + 1] then push arr[i] output[index + 1] else push arr[i + 1]
  //return output
};

console.log(tourney([9, 5, 4, 7, 6, 3, 8]));
