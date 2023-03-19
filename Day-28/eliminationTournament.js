const tourney = (array) => {
  //declare the output array to push arrays, where output at 0 == array
  const output = Array(Math.floor(array.length / 2));
  output[0] = array;
  console.log(output);
  //use a for loop to traverse the array
  //if array.length is odd then the last element should be first i  the second array
  //if the arr[i] > arr[i + 1] push arr[i] to output else push arr[i + 1]
  //return output
};
