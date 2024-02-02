// function string() {
//   const sentence = "The quick brown fox jumps over the lazy dog.";

//   let length = sentence.length;

//   let i = -1;
//   let iterationCount = 0;
//   while (sentence.at(i) !== "b") {
//     iterationCount++;
//     i--;
//   }
//   return iterationCount;
// }

// console.log(string());

function string() {
  const sentence = "The quick brown fox jumps over the lazy dog.";

  let length = sentence.length;

  let i = -1;
  let iterationCount = 0;
  while (sentence.at(i) !== "0" && iterationCount !== length - 1) {
    iterationCount++;
    i--;
  }
  return iterationCount;
}

console.log(string());
