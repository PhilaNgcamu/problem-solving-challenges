const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr.length; i++) {
  //print out: 1, 4, 7
  console.log(arr[i][0]);
}

for (let i = 0; i < arr.length; i++) {
  //print out: 3, 6, 9
  console.log(arr[i][arr[i].length - 1]);
}
