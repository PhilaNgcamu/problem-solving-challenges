// For this challenge you will determine the area of a rectangle.
// have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height.
function rectangleArea(strArr) {
  let integers = strArr.join("").match(/[0-9]/g);

  let x1 = Number(integers[0]);
  let y1 = Number(integers[1]);
  let x2 = Number(integers[2]);
  let y2 = Number(integers[3]);
  let x3 = Number(integers[4]);
  let y3 = Number(integers[5]);
  let x4 = Number(integers[6]);
  let y4 = Number(integers[7]);

  return Math.abs((y4 - y2) * (x2 - x1));
}
console.log(rectangleArea(["(-2 -2)", "(0 0)", "(-2 0)", "(0 -2)"]));
