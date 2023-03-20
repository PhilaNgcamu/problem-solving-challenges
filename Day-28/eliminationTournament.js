// Codewars > Elimination Tourney
const tourney = (array) => {
  //declare the output array to push arrays, where output at 0 == array
  const output = Array(Math.ceil(array.length / 2)).fill([]);
  output[0] = array;
  //use a for loop to traverse the array
  let index = output.length - 1;
  while (index >= 0) {
    for (let i = 0; i < output[index].length; i += 2) {
      //if array.length is odd then the last element should be first i  the second array
      if (output[index].length % 2 !== 0 && index === 0) {
        output[1].push(array.at(-1));
        break;
      } else {
        output[index + 1].push(output[index][i]);
      }
    }
    index--;
  }

  // console.log(output);

  return output;
};

console.log(tourney([9, 5, 4, 7, 6, 3, 8]));
