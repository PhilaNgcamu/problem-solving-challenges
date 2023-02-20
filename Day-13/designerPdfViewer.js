// Hackerrank > Designer PDF Viewer
function designerPdfViewer(h, word) {
  // find the postion of the letter and reference it on the word[position of letter]
  //multple each letter according their given numbers
  //return the area
  let area = 1;
  for (let i = 0; i < word.length; i++) {
    area *= h[word[i].charCodeAt(0) - 97];
  }
  return area;
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
