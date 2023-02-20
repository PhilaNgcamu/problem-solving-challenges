// Hackerrank > Viral Advertising
function viralAdvertising(n) {
  // divide the number of the shared / 2
  // then add the number to count
  // then multiple count by 3 to shared
  let liked = 0;
  let count = 0;
  let shared = 5;
  for (let i = 1; i <= n; i++) {
    liked = Math.floor(shared / 2);
    count += liked;
    shared = liked * 3;
  }
  return count;
}

console.log(viralAdvertising(5));
