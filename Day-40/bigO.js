// The number of operations below is O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// The number of operations below is O(1)

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

function countUpAndDown(n) {
  console.log("Going Up!");

  //For the first loop below the number of operations is O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the top!\nGoing Down...");

  //For the second loop below the number of operations is also O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye");
}

countUpAndDown(10);
