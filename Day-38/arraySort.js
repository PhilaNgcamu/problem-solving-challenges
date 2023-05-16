function sortByMostLikes(arr) {
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
        acc["author"] = obj.author;
        if (acc["likes"]) acc["likes"] += obj.likes;
        else acc["likes"] = obj.likes;

        return acc;
      }, {})
  );
}
const arr = [
  { author: "Michael Chan", likes: 7 },
  { author: "Edsger W. Dijkstra", likes: 5 },
  { author: "Edsger W. Dijkstra", likes: 12 },
  { author: "Robert C. Martin", likes: 10 },
  { author: "Robert C. Martin", likes: 0 },
  { author: "Robert C. Martin", likes: 2 },
];
sortByMostLikes(arr);
