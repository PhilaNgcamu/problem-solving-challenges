// Codewars > Jaden Case
String.prototype.toJadenCase = function () {
  //split into array
  let arr = this.split(" ");
  //map over the array and capitalize the first letter of each word
  return arr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
};
const str = "How can mirrors be real if our eyes aren't real";
