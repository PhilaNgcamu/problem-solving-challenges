const arr = [
  { author: "Michael Chan", likes: 7 },
  { author: "Edsger W. Dijkstra", likes: 5 },
  { author: "Edsger W. Dijkstra", likes: 12 },
  { author: "Robert C. Martin", likes: 10 },
  { author: "Robert C. Martin", likes: 0 },
  { author: "Robert C. Martin", likes: 2 },
];
let mostAppearedAuthor;
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  if (arr.filter((obj) => obj.author === arr[i].author).length > count) {
    mostAppearedAuthor = arr[i].author;
  }
}

console.log(
  arr
    .filter((obj) => obj.author === mostAppearedAuthor)
    .reduce((acc, obj) => {
      acc += obj.likes;
      console.log(acc);
      return { author: mostAppearedAuthor, likes: acc };
    }, 0)
);
