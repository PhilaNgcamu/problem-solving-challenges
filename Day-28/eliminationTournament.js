// Codewars > Elimination Tourney
const tourney = (array) => {
  //declare the output array to push arrays, where output at 0 == array
  const output = Array(Math.floor(array.length / 2)).fill([]);
  output[0] = array;
  //use a for loop to traverse the array
  while (output.includes([].length)) {
    for (let i = 0; i < array.length; i += 2) {
      //if array.length is odd then the last element should be first i  the second array
      if (array.length % 2 !== 0 && i === 0) {
        output[1] = array.at(-1);
      }
      //if the arr[i] > arr[i + 1] push arr[i] to output else push arr[i + 1]
      else if (array[i] > array[i + 1]) output[1].push(array[i]);
      else output[1].push(array[i + 1]);
    }
  }

  console.log(output.includes([]));

  return output;
};
