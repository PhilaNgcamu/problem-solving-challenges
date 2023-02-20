// Hackerrank > Designer PDF Viewer
function designerPdfViewer(h, word) {
  // find the postion of the letter and reference it on the word[position of letter]
  //find the max height of the character
  //return the area = maxHeight * word length
  let maxHeight = 0;

  for (let i = 0; i < word.length; i++) {
    let letterHeight = h[word[i].charCodeAt(0) - 97];
    if (letterHeight > maxHeight) maxHeight = letterHeight;
  }
  return maxHeight * word.length;
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    "abc"
  )
);
