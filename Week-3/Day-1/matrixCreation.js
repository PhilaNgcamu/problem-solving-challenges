function getMatrix(number) {
  //How can I repilcate?
  const arr = [];

  for (let i = 0; i < number; i++) {
    arr[i] = Array(number).fill(0);
    arr[i][i] = 1;
  }
  return arr;
}

//(2) => [ [1,0],
//         [0,1] ]
