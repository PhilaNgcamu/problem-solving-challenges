//Write a function that takes in a number and prints it Recursive (Simplified version). Print 1, 2, 3, 4, 5
function main() {
  print(1);
}

function print(num) {
  if (num === 5) console.log(num);
  else {
    console.log(num);
    print(num + 1);
  }
}

main();
