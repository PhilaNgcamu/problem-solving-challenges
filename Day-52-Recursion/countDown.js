function countDown(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
  console.log("All Done!");
}

function countDown(num) {
  if (num <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
