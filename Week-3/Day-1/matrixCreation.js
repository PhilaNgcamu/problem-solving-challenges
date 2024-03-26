function getMatrix(number) {
  //How can I repilcate?
  const arr = Array.from({ length: number }, () => Array(number).fill(0));

  for (let i = 0; i < number; i++) {
    console.log(arr);
    arr[i][i] = 1;
  }
  return arr;
}
console.log(getMatrix(7));
//(2) => [ [1,0],
//         [0,1] ]
