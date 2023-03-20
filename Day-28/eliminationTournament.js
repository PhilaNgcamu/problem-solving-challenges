// Codewars > Elimination Tourney
const tourney = (array) => {
  //declare the output array to push arrays, where output at 0 == array
  const output = Array(Math.ceil(array.length / 2)).fill([]);
  output[0] = [...array];
  //while on the first index of the output, loop through the existing array
  output.forEach((arr, index) => {
    for (let i = 0; i < arr.length; i += 2) {
      //--if arr.length is odd then push last character to the next arr
      if (arr.length % 2 !== 0 && i === 0 && !output[index + 1].length) {
        output[index + 1].push(arr.at(-1));
      }

      //--if arr[i] > arr[i + 1] then push arr[i] output[index + 1] else push arr[i + 1]
    }
  });

  return output;
};

console.log(tourney([9, 5, 4, 7, 6, 3, 8]));
