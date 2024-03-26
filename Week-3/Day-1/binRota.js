function binRota(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      for (let j = arr[i].length - 1; j >= 0; j--) {
        console.log(arr[i][j]);
        res.push(arr[i][j]);
      }
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j], i, j);
        res.push(arr[i][j]);
      }
    }
  }
  return res;
  //   arr[0][0]
  //   arr[0][1]
  //   arr[0][2]
  //   arr[1][2]
  //   arr[1][1]
  //   arr[1][0]
  //   arr[2][0]
  //   arr[2][1]
  //   arr[2][2]
}
