// Codewars > Grasshopper Summation
var summation = function (num) {
  if (num === 1) return num;
  return num + summation(num - 1);
};
