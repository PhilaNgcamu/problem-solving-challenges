var rotateMatrix = (arr) => {
  var rotated = [];
  var length = arr[0].length;
  for (var i = length - 1; i >= 0; i--) {
    var sub = [];
    for (var j = 0; j < arr.length; j++) {
      sub.push(arr[j][i]);
      console.log(sub);
    }
    rotated.push(sub);
  }
  return rotated;
};

rotateMatrix([
  [-1, 4, 5],
  [2, 3, 4],
]);
