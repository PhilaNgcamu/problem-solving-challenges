// Codewars > Elimination Tourney
const tourney = (array) => {
  //declare the output array to push arrays, where output at 0 == array
  const output = Array(Math.ceil(array.length / 2)).fill([]);
  output[0] = [...array];
  //while on the first index of the output, loop through the existing array
  for (let i = 0; i < output.length; i++) {
    if (output.at(-1).length) break;
    //--if arr.length is odd then push last character to the next arr
    if (output[0].length % 2 !== 0) output[1].push(output[0].at(-1));
    for (let j = 0; j < output[i].length; j += 2) {
      //--if arr[i] > arr[i + 1] then push arr[i] output[index + 1] else push arr[i + 1]
      if (!output[i][j + 1]) break;
      else if (output[i][j] >= output[i][j + 1]) {
        output[i + 1].push(output[i][j]);
      } else {
        output[i + 1].push(output[i][j + 1]);
        console.log(output[i][j + 1]);
      }
    }
  }

  return output;
};

console.log(tourney([9, 5, 4, 7, 6, 3, 8]));
